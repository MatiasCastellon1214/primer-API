import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";

const CardCharacter = ({character}) => {

    let {image, name, status} = character

  return (
    <Card sx={{ width: 350, border:"2px black solid" }}>
                  <CardActionArea>
                    <CardMedia
                        
                      component="img"
                      height="170"
                      image={image}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {status}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
  )
}

export default CardCharacter