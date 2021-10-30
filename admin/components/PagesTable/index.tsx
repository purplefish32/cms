import { FunctionComponent } from "react";
import { DataGrid, GridCellParams, GridColDef } from '@material-ui/data-grid';
import { Button, LinearProgress } from "@material-ui/core";
import { Edit } from "@material-ui/icons";
import { usePagesTableQuery } from "../../generated/graphql";

const PagesTable: FunctionComponent = () => {
    const { data, loading, error } = usePagesTableQuery({
        fetchPolicy: "cache-and-network"
    });

    if (error) {
        return <div>Error loading pages.</div>;
    }

    if (!data) {
        return <div>Loading</div>;
    }

    const rows = data.posts;

    const columns: GridColDef[] = [
        { field: 'title', headerName: 'Title' },
        { field: 'slug', headerName: 'Slug' },
        { field: 'status', headerName: 'Status' },
        {
            field: 'action', headerName: 'Actions', disableColumnMenu: true, sortable: false, renderCell: (params: GridCellParams) => (
                <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    startIcon={<Edit />}
                    onClick={() => {
                        console.log(params.row.id)
                    }}
                >Edit</Button >
            )
        },
    ];

    return (
        <>
            {loading && <LinearProgress />}
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
            </div>
        </>
    )
}

export default PagesTable