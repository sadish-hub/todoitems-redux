import React from 'react';
import Constants from '../../../store/constants';

const StatusFilter = ({ value, onStatusChange }) => {
    const getStatusFilter = () => {
        let statusFilter = [];
        Constants.FILTER.forEach(filterItem => {
            const selectedFilterClass = filterItem === value ? "selected" : "";
            statusFilter.push(<li key={filterItem}><button value={filterItem} className={selectedFilterClass} onClick={onStatusChange}>{filterItem}</button></li>);
        });
        return statusFilter;
    };

    return (<div className="filters statusFilters">
        <h5>Filter by Status</h5>
        <ul>
            {getStatusFilter()}
        </ul>
    </div>);
}

export default StatusFilter;