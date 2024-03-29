import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';

const ExpansionPanel = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles(theme => ({

}))(MuiExpansionPanelDetails);

const renderIf = (render, id) => {
  const items = render(id);
  
  return items === null ? items : <ExpansionPanelDetails>{items}</ExpansionPanelDetails>;
}

function CustomizedExpansionPanels({
    indicatorsGroups,
    onIndicatorsGroupClick,
    renderItems
}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      {
          indicatorsGroups.map((el, index) => {
              return (
                <ExpansionPanel square expanded={true} onChange={(evt) => {
                  evt.preventDefault();
                  onIndicatorsGroupClick(el.id);
                  //handleChange(`panel${index}`)}
                }}>
                    <ExpansionPanelSummary aria-controls={`panel${index}d-content`} id={`panel${index}d-header`}>
                      
                      <Typography>{el.name}</Typography>
                    </ExpansionPanelSummary>
                    {
                      renderIf(renderItems, el.id)
                    }
                </ExpansionPanel>
              );
          })
      }
    </div>
  );
}

export default CustomizedExpansionPanels;