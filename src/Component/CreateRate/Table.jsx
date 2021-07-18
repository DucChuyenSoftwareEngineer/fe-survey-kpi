import React, { PureComponent } from 'react';
import Datatable from "../Common/Datatable/DataTable"
import {confirm} from "../Common/Confirm/index"

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
				key: "evaluateDepartment",
				text: "Phòng ban đánh giá",
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
				key: "userCreate",
				text: "Người tạo",
				TrOnlyClassName: "text-center flex-wrap",
				sortable: true,
				width: "10%"
            }      ,
			{
				key: "dateCreate",
				text: "Ngày tạo",
				TrOnlyClassName: "text-center flex-wrap",
				sortable: true,
				width: "10%"
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