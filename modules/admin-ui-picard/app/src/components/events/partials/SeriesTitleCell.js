import React from "react";
import {useTranslation} from "react-i18next";
import {connect} from "react-redux";
import { loadEventsIntoTable } from '../../../thunks/tableThunks';
import { setSpecificEventFilter } from '../../../thunks/tableFilterThunks';
import Link  from 'react-router-dom/Link';

/**
 * This component renders the title cells of series in the table view
 */
const SeriesTitleCell = ({ row, loadingEventsIntoTable, setSpecificEventFilter }) => {
    const { t } = useTranslation();

    const redirectToEvents = async seriesTitle => {
        // set the series filter value of events to series title
        setSpecificEventFilter('series', seriesTitle);

        // redirect to tables
        loadingEventsIntoTable();
    }

    return (
        <Link to="/events/events"
              className="crosslink"
              title={t('EVENTS.SERIES.TABLE.TOOLTIP.SERIES')}
              onClick={() => redirectToEvents(row.title)}>
            {row.title}
        </Link>
    )
}

// Mapping actions to dispatch
const mapDispatchToProps = dispatch => ({
    loadingEventsIntoTable: () => dispatch(loadEventsIntoTable()),
    setSpecificEventFilter: (filter, filterValue) => dispatch(setSpecificEventFilter(filter, filterValue))
});

export default connect(null, mapDispatchToProps)(SeriesTitleCell);
