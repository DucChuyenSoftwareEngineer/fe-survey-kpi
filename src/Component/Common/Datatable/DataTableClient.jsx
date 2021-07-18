import React from "react";
import PropTypes from "prop-types";
import ReactDatatable from "@ashvin27/react-datatable";
import { dataTableConfigClient } from "../../../Config";

const DatatableClient = ({
							sort,
							data: { data, total },
							columns,
							config,
							...otherProps
						}) => {
	const _config = {
		...dataTableConfigClient,
		...config,
		sort
	};

	return (
		<ReactDatatable
			config={_config}
			columns={columns}
			records={data}
			total_record={total}
			{...otherProps} />
	);
};

DatatableClient.propTypes = {
	sort: PropTypes.object,
	columns: PropTypes.array,
	data: PropTypes.shape({
		data: PropTypes.array,
		total: PropTypes.number
	}),
	config: PropTypes.object,
	onChange: PropTypes.func
};

export default DatatableClient;
