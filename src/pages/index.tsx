import {Card, CardContent, CardHeader, Grid} from "@mui/material";
import {Layout} from "@/components/layouts";
import {EntryList, NewEntry} from "@/components/ui";


export default function HomePage() {
    return (
        <Layout title='Home - OpenJira'>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                    <Card sx={{height: 'calc(100vh - 100px)'}}>
                        <CardHeader title="Pendientes"/>
                        <NewEntry/>
                        <EntryList status='pending'/>

                    </Card>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Card sx={{height: 'calc(100vh - 100px)'}}>
                        <CardHeader title="En Progreso">

                        </CardHeader>
                        <EntryList status='in-progress'></EntryList>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Card sx={{height: 'calc(100vh - 100px)'}}>
                        <CardHeader title="Completadas">

                        </CardHeader>
                        <EntryList status='finished'></EntryList>
                    </Card>
                </Grid>
            </Grid>
        </Layout>
    )
}
