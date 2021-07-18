import React, { PureComponent } from 'react';
import { Link } from "react-router-dom";
import {confirm} from "../Common/Confirm/index"
import Datatable from "../Common/Datatable/DataTable"

class Table extends PureComponent {
    constructor(props) {
        super(props);
        this.columns = [
			{
				key: null,
				text: null,
				TrOnlyClassName: "text-center",
				sortable: false,
				width: "10%",
				cell: record => (
					<div className="d-flex text-center"
						style={{ justifyContent: "center" }}>
						<Link to={`/mail/${record.id}`}
							className="btn btn-icon btn-circle btn-sm btn-light-warning mr-1">
							<i className="la la-edit" />
						</Link>
						<button type="button"
							className="btn btn-icon btn-circle btn-sm btn-light-danger"
							onClick={() => this.onDelete(record)}>
							<i className="la la-trash" />
						</button>
					</div>
				)
			},
			{
				key: "index",
				text: "STT",
				TrOnlyClassName: "text-center flex-wrap",
				sortable: false,
				center: true,
				width: "5%",
				cell: ({ index }) => (
					<div className="text-center">{index}</div>
				)
			},
			{
				key: "formName",
				text: "Tên biểu mẫu",
				TrOnlyClassName: "text-center flex-wrap",
				sortable: true,
				width: "30%"
			},
			{
				key: "title",
				text: "Tiêu đề",
				TrOnlyClassName: "text-center flex-wrap",
				sortable: true,
				width: "30%"
			},
			{
				key: "userCreate",
				text: "Người tạo",
				TrOnlyClassName: "text-center flex-wrap",
				sortable: true,
				width: "15%"
			},
			{
				key: "dateCreate",
				text: "Ngày tạo",
				TrOnlyClassName: "text-center flex-wrap",
				sortable: true,
				width: "15%"
			}
        ]
    }

	onDelete = ({ id, name }) => {
		const event = this.props.onDelete;

		if (event) {
			confirm({
				title: "Xóa biểu mẫu",
				message: `Bạn muốn xóa Biểu mẫu ${name}?`,
				buttons: [
					{
						label: "Xóa",
						className: "btn btn-sm btn-outline-danger",
						onClick: () => event(id)
					},
					{
						label: "Hủy",
						className: "btn btn-sm btn-outline-secondary"
					}
				]
			});
		}
	};
	onChange = data => this.props.onChange?.(data);
    
    render() {
		const { data, sort, pageSize } = this.props;

        return (
			<Datatable
				sort={sort}
				data={data}
				pageSize={pageSize}
				columns={this.columns}
				onChange={this.onChange} />
        );
    }
}

export default Table;