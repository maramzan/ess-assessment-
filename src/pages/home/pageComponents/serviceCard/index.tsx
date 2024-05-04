import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Service } from ".././../../../constants/type";
import { CardActionArea } from "@mui/material";

export default function ServicesCard({ service }: { service: Service }) {
  return (
    <Card
      onClick={() => {
        service?.handleCardClick?.(service?.id);
      }}
      sx={{ maxWidth: 250, borderRadius: 2 }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="153"
          image={service?.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography
            fontSize={24}
            fontWeight={600}
            gutterBottom
            variant="h5"
            component="div"
          >
            {service?.name}
          </Typography>
          <Typography
            fontSize={16}
            fontWeight={400}
            variant="body2"
            color="text.secondary"
          >
            {service?.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
