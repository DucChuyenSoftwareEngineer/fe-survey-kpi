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
				key: "user",
				text: "User",
				TrOnlyClassName: "text-center flex-wrap",
				sortable: true,
				width: "10%"
            },
			{
				key: "nameUser",
				text: "Tên nhân viên",
				TrOnlyClassName: "text-center flex-wrap",
				sortable: true,
				width: "10%"
            }   ,
			{
				key: "title",
				text: "Chức danh",
				TrOnlyClassName: "text-center flex-wrap",
				sortable: true,
				width: "10%"
            }   ,
			{
				key: "department",
				text: "Phòng ban",
				TrOnlyClassName: "text-center flex-wrap",
				sortable: true,
				width: "10%"
            }   ,
			{
				key: "formName",
				text: "Mẫu đánh giá",
				TrOnlyClassName: "text-center flex-wrap",
				sortable: true,
				width: "10%"
            },
			{
				key: "period",
				text: "Kỳ đánh giá",
				TrOnlyClassName: "text-center flex-wrap",
				sortable: true,
				width: "10%"
            }      ,
            {
				key: "status",
				text: "Trạng thái",
				TrOnlyClassName: "text-center flex-wrap",
				sortable: true,
				width: "15%",
				cell: record => (
					<span className={clsx("label label-inline",{
						"label-light-danger": record.status === "Chưa thực hiện",
						"label-light-success": record.status === "Hoàn thành",
						"label-light-warning": record.status === "Lưu tạm",
					})}>{record.status}</span>
				)
            }      ,
            {
				key: "dateUpdate",
				text: "Ngày thực hiện",
				TrOnlyClassName: "text-center flex-wrap",
				sortable: true,
				width: "10%"
            }      ,
			{
				key: "userCreate",
				text: "Người tạo",
				TrOnlyClassName: "text-center flex-wrap",
				sortable: true,
				width: "10%"
            }      ,
			{
				key: "dateReceived",
				text: "Ngày tạo",
				TrOnlyClassName: "text-center flex-wrap",
				sortable: true,
				width: "50%"
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