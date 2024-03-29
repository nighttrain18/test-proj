import React from 'react'
import { Typography } from '@material-ui/core';
import CustomSearchView from '../../../../common/custom-search-view';
import ContentTable from '../content-table';

import './style.css'

const QuestionsAffiliationView = ({
    competenceGroupDescription,
    onSearchContent,
    content,
    competenciesGroupId
}) => {
    return (
        <section className="questions-affiliation">
            <Typography variant="body1" gutterBottom>
                {competenceGroupDescription}
            </Typography>
            <CustomSearchView onChange={(evt) => {onSearchContent(evt.target.value)}} placeholder="Введите имя компетенции..." />
            <ContentTable
                competenciesGroupId={competenciesGroupId}
                values={content} 
                columns={[
                    'Название компетенции', 
                    'Описание компетенции', 
                    'Количество вопросов']} />
        </section>
        
    );
}

export default QuestionsAffiliationView;