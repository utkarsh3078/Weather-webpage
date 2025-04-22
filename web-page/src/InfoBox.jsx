import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./infoBox.css"

export default function InfoBox({info}){
    const INIT_IMG = "https://images.unsplash.com/photo-1560257855-0166aa056aeb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJyaWdodCUyMHN1bmxpZ2h0fGVufDB8fDB8fHww"
    return(
        <div className='info' >
            
            <div >
            <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 200 }}
                image={INIT_IMG}
                title="green iguana"
            />
            <div className='card'>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {info.city}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }} size="large">
                    Temperature: {info.temp} &deg; C
                    <br />
                    feels like: {info.feelsLike} &deg; C
                    <br />
                    Max Temp: {info.tempMax} &deg; C
                    <br />
                    Min temp: {info.tempMin} &deg; C
                    <br />
                    humidity: {info.humidity} %
                    <br />
                    Description: {info.description}
                </Typography>
            </CardContent>
            </div>
            </Card>
            </div>
            
        </div>
    )
}