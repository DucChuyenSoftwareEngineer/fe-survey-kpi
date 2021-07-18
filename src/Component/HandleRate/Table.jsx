import React, { PureComponent } from 'react';
import { Link } from "react-router-dom";
import clsx from "clsx";
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
				width: "5%",
				cell: record => (
					<div className="d-flex text-center"
						style={{ justifyContent: "center" }}>
						<Link to={`/rate/${record.id}`}
							className="btn btn-icon btn-circle btn-sm btn-light-primary">
							<i className="flaticon-eye" />
						</Link>
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
				text: "Tên biểu mẫu đánh giá",
				TrOnlyClassName: "text-center flex-wrap",
				sortable: true,
				width: "30%"
			},
			{
				key: "period",
				text: "Kỳ đánh giá",
				TrOnlyClassName: "text-center flex-wrap",
				sortable: true,
				width: "20%"
			},
            // {
			// 	key: "department",
			// 	text: "Phòng ban đánh giá",
			// 	TrOnlyClassName: "text-center flex-wrap",
			// 	sortable: true,
			// 	width: "20%"
			// },
			{
				key: "status",
				text: "Trạng thái",
				TrOnlyClassName: "text-center flex-wrap",
				sortable: true,
				width: "20%",
				cell: record => (
					<span className={clsx("label label-inline",{
						"label-light-danger": record.status === "Chưa thực hiện",
						"label-light-success": record.status === "Hoàn thành",
						"label-light-warning": record.status === "Lưu tạm",
					})}>{record.status}</span>
				)
			},
			{
				key: "dateReceived",
				text: "Ngày nhận",
				TrOnlyClassName: "text-center flex-wrap",
				sortable: true,
				width: "20%"
			}
        ]
    }
    
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