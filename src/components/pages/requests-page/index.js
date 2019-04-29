import React, { Fragment } from 'react'

import AddRequestButtonComponent from './add-request-button-component'
import Search from '../../bootstrap/search';
import CustomTable from '../../common/table'

const columns = [
    {
        width: 200,
        label: 'Номер заявки',
        dataKey: 'number',
        numeric: true
      },
      {
        width: 120,
        label: 'Дата заявки',
        dataKey: 'date'
      },
      {
        width: 120,
        label: 'Компания',
        dataKey: 'company',
        flexGrow: 1
      },
      {
        width: 120,
        label: 'Вакансия',
        dataKey: 'position',
        flexGrow: 1
      },
      {
        width: 120,
        label: 'Подразделение',
        dataKey: 'subdivision',
        flexGrow: 1
      },
      {
        width: 120,
        label: 'Кандидаты',
        dataKey: 'candidates',
        numeric: true
      },
      {
        width: 120,
        label: 'Согласование',
        dataKey: 'agreements'
      }
];

const RequestsPageComponent = ({
    requestsTable,
    requestSearch,
    addRequest
}) => {
    const {
        requests,
        onRowClicked
    } = requestsTable;

    const {
        value,
        onChanged
    } = requestSearch;

    return (
        <section className="requests-page">
            <h2>Все заявки</h2>
            <AddRequestButtonComponent onClick={addRequest.onClicked}>Добавить заявку</AddRequestButtonComponent>
            <Search placeholder='Поиск по компании' />
            {/* <RequestsTableComponent 
                rowCount={requests.length}
                rowGetter={({index}) => requests[index]}
                onRowClicked={() => {}}/> */}
            <CustomTable columns={columns.map(el => el.label)} values={requests} onRowClick={() => alert(13)} />
        </section>
    );
}

export default RequestsPageComponent;