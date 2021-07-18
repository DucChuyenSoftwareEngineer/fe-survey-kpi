import React, { useCallback } from "react";
import PropTypes from "prop-types";
import ReactDatatable from "@ashvin27/react-datatable";
import { dataTableConfig } from "../../../Config";

const Datatable = ({
					sort,
					data: { data, total },
					columns,
					pageSize,
					onChange,
					...otherProps
				}) => {
	const config = {
		...dataTableConfig,
		sort,
		page_size: pageSize ?? dataTableConfig.page_size
	};
	const onTableChange = useCallback(({
										sort_order: {
											column: sortColumn,
											order: sortOrder
										},
										page_size: limit,
										page_number: page
									}) => {
		const event = onChange;

		if (event) {
			const changeData = {
				sortColumn,
				sortOrder,
				limit,
				page
			};

			event(changeData);
		}
	}, []);

	return (
		<ReactDatatable
			dynamic
			config={config}
			columns={columns}
			records={data}
			total_record={total}
			onChange={onTableChange}
			{...otherProps} />
	);
};

Datatable.propTypes = {
	sort: PropTypes.object,
	pageSize: PropTypes.number,
	columns: PropTypes.array,
	data: PropTypes.shape({
		data: PropTypes.array,
		total: PropTypes.number
	}),
	onChange: PropTypes.func
};

export default Datatable;
