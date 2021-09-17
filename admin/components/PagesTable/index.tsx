import { FunctionComponent, useMemo } from "react";
import { usePagesTableQuery } from "../../generated/graphql"
import { DataGrid, GridCellParams, GridColDef } from '@material-ui/data-grid';
import { Button, CircularProgress, LinearProgress } from "@material-ui/core";
import { Edit } from "@material-ui/icons";

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
            field: 'action', headerName: 'Actions', disableClickEventBubbling: true, disableColumnMenu: true, sortable: false, renderCell: (params: GridCellParams) => (
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
            {data.posts_aggregate.aggregate.count} PAGES {loading && <LinearProgress />}
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
            </div>
        </>
    )
}

export default PagesTable