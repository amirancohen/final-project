import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";

const Howdowork = () => {
  return (
    <>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={5}
      >
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="345"
              image="https://media.istockphoto.com/id/1310445559/vector/freelance-work-money.jpg?s=2048x2048&w=is&k=20&c=iF6it8OaIMquH265euG8fMEfFv8gB7SPTPXgwxw7AUU="
              alt="one"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                What do we offer?
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Project X connects the business world with people who are able
                to give of their knowledge and together for success
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="345"
              image="https://media.istockphoto.com/id/1453804291/vector/google-searching-system-or-seo-vector-illustration-or-banner.jpg?s=2048x2048&w=is&k=20&c=_cbYkM_I6QSkk0IDqYUaaO8FjtsiWC0HTlRJTD5cuGg="
              alt="two"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Where do we start?
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Looking for a suitable project for you and applying for the
                project
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="345"
              image="https://cdn.pixabay.com/photo/2013/07/12/15/53/email-150497_1280.png"
              alt="tree"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Did you find a project that suits you?
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Click on the @ button and fill in the details so that we can
                contact you.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Stack>
    </>
  );
};

export default Howdowork;
