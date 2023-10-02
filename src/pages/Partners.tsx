import {
  Card,
  CardActionArea,
  CardMedia,
  Stack,
} from "@mui/material";
import Title from "../components/Title";

function Partners() {
  return (
    <>
      <Title mainText="Partners" subText="" subText2="" />
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={12}
      >
        <Card sx={{ maxWidth: 100 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="50"
              image="https://cdn.pixabay.com/photo/2013/02/12/09/07/microsoft-80659_1280.png"
              alt="green iguana"
            />
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 100 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="50"
              image="https://cdn.pixabay.com/photo/2015/10/31/12/54/google-1015751_1280.png"
              alt="green iguana"
            />
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 100 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="50"
              image="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT4AAACfCAMAAABX0UX9AAAAkFBMVEXhKCb////gGxn1yMjgCwXqgoHfAADhJCLjPjziOznhJSPgGRb//Pvtk5HlVFPjNjP87ez64+H0wL7gFBHzubj98/L30M/obGr64eD529r1xML76Of41tXumJbgEA3pcW/xqqnnZmTvoJ7lTUvmXFrqenjsiYjiMC3ysrDwqKbrg4L3zMvnY2DmWljlSEbsjYvUrx4FAAAKq0lEQVR4nO2ciZLqOg6GgwkynbCHpWma0ECz9Abv/3bjsEVynLAonJmp0l9169YJjpcP2ZZk015FxJD33+7A/7cEH0uCjyXBx5LgY0nwsST4WBJ8LAk+lgQfS4KPJcHHkuBjSfCxJPhYEnwsCT6WBB9Lgo8lwceS4GNJ8LEk+FgSfCwJPpYEH0sJvp+q6AH9nPBtwBfdLfBO+OraE90t/SL4GBJ8LAk+lgQfS4KPJcHHkuBjSfCxJPhYEnwsCT6WBB9Lgo8lwceS4GNJ8LEk+FgSfCwJPpYEH0u34Yvii4Qy1k34ov5FvZ3wQ7oJH6Aj9ZbgQ7oNX0PwuSX4WBJ8LAk+lgQfS4KPJcHHkuBj6an4tFZK6TteCPSt5Y9VB7dXfWPrd3X3ifhUDFD/na1mv3WAWGW6mt7QjM9vALR/V7O5KR8WNRIoH6LlfLUatbQpihEGMbr5mWnTKEKfh/gDHQJs/nK7m6fn4NMRzLevl3e6/ZlPcw3Bpvp2Vj8ZRxD5teq5mfHiBfKa0aBqvc655kF1v4HLYAPvrXfR2yoLIdqizxcXfkEIu8X7ZZDd7QhuTI08A1/gtz/QGwc1+nVAdhK0048GxvxC9UXfGLbANTM1/L1ZNVfeZxeA/hA970Lm7R1+74I3DPcTu7vbF/+WleEJ+JTa2iM8qO+l5oDxdWIPVoNs8Sjbkr8cZsoloOYn1mqEH2eSQ9EH+nRwoqthn208aV+H3lWVjw9Gzt4kHR5d7IHg86HvKj7ZWE0F8JVTc6V3Wi39Dnr4EdP3PcA9+4qOSHevdmUnNVYZ830+PljkDdGoee4QwQdOkzK4PdKW1uP8mgf1g2lHU/SsYw1f/+I3Xg6Vw6qgu1vnAvJMfNAr6E6lsoAsvonT9g6fxKj7qp5n1Uf9HXagDX40p5uHj/v2c+gJTCtFGl7jVzI+9zREWscZfAXapvaj28X0TM8SWIB3lh4xvyDGu9NIXaeX8PuX+OLmVSJLfQe+tLUg6lwr22ibwvoTPyF+tcLzdJJwiYpm7lHbYn6l4tNL2vakt5guetRqju7Erfh+zr2H6vXC46QwYB+EuH5kiZ2ajUPXb+jBqnD/LRUf6Xqlt4M4CiMfRsRw1qET33g63+1mC9sBax/tJ7TspLputdufzXf6tGmYhHv0AM892qRxsT2gW1HnY1Zv72Zb+nU3vKLlr0x8pOeD1iVwUGRFbIAD33gJoQk3VQS/FOD08OUHERnT1oQe2iiEOt20zWQNIvxgk449xOtcsiqGNVxysIIoqdQEm9+ksb7/j/Bhp6sTkHmDHemayuDrpzGaonv3+8F+iD9Smaf7oQay2m7NxhTj76qZTj3A/t2faQ/wpBiiODekHtJL0XJVHj6yNLdpMdz3ZImi+H7w+hyQzbNxxIftoRWRmnGrDRXQBTgN3DKPSXeph6IBrwpb2/t+Dj74SUs1I/pZhFdpg5biI1kTa6YmmyeJxb6t0ZBQ5FtZS9plWDEO2JL1FyMaKDoqrVAXGgWbb3n4giAtNaAOVwQzvEatFcX3ZQGJ8IRMAtcYzedxZjB4EiZ2rPCadg7cAhywNSKzRipUKrO9ki/sNx9NefjUPC20QManYbOgPlvPp/iWdmyLQ4ekPbyojjJpKDwLBwkHbL3nL1LhgC2ZjvitSda+sAl/RZmPy8cXoWA3BRLCZyaMM73F+JIFy2oPjd+0p3F2yzEU3L2kZTJPT4EbCdiSQjj7sshWGq7Tj9/zZ295+NAMG5wsRMfxumvDM/tsaCes7PbQS6Y9bNdVx1CwS504ysQdPgVu+JrO0b1Gy4ljdpKv7F/gQ0vxcTIoqG/trKnpy0L7mXzfFXzIn3RNJOzRHfxEjOZo22Q9PMQiuA3XmQmeAflbb4n40v6Yr1dH/syKCRINR8fDibvwYTxrRwyF2RzwkoW/piygg9jG47IuvPjlBx5PwgftRTZBMvion9Pq9+FDq2rNcYqDd4GPDJuh7WZ+2UWcngn2azb/Al/qGU9ajgD/9Vul5y8PW9/eZX3fiM1hcuNtLHEzScB2ypP+r1mfY66m6rVA5RwVXV/70C7oCgEwrGOURlwfsxzioOeURsBttB1jwnjzo94Sd978TGlnqnz62l34cJI96zXTcOfkFuLArwskYDuXQC85jjTx7m0n/XGx0vCFeZnb83aBdRc+YksOS8HdO52ukWONHSAf7+yFRCjWe8vywdmjn3+Bj+R5095+1cGx2t+Fj+QRF5nSeOO9GAqu4gNPxOlp8VQz1Ev7TI/mOKb5GdMSY16VdfLGtdB9XH8fvhjnu4JMjIJCuktyDlvPoIVJnV+P0cO+bV8hhlvwY4IyMy72dttfku3CU+nB/X34yFS0QyiScbmcrQUa9RlZUjpP8eJXGVFvXIfIXh0RcVqwxHwfOeLvNiO6XWhY/4SX0d2Fj54C9EluDpDXghd5372TfaZ52Tl+TpKImuS8mgWnHXfj20GOAuuUhl7yCeK2+bY7y3P+6D58OIA3ca+6jFXRo0YUk9jHVkfhey9AwvG0v6arODE9yOx7HHzDnD+jOGwHJH9b6Xup9WlfnXyzNTyCj16+qAzWMYRKhT7MSVqdeBjgunyBvW6yeZj9tQWxMpVCsCCLuJ355eHL1Utge87bz7Nlfqa5g97hW74XH51pJs56m9ZW+7519vuL93iSJTi/RtZi+3JId7te1Rb2w8KD3vLwGYdMb+yHr8Pqz5DmrCZJ0HQvPnrYlCPrSNvRa3pqpjc3jKv4N3yl4vPC0fVyxgQewGcfyjpkb8kka3qUxYKkoN1aRYlLdrgInJi2dSZSMj7PX18v+PcQPq3tE3RLXTtpnb1EkIn44mu3NJqHdM26Vvtu1WvKuIN/1plSufioH+FSZ2ffMrgNn6e9vIt4B73ahpFd2xyxrV/Mb3840q+/TxrD1cj8q1X5sBzEkvF58Wdh4dOd0QfweTouuOfSc1wls7bWSsOROSns7uj4QgD7d4hng0o86Xw9GZ+nwszt44tezzeWH8FnhvGd05Gci6BAd2b7QPTYXZX3pQwvl4nD6Tuo2WuzUf14tvUlo/xzp/7Gs9Q1fQSfGYfn3IA/lDswiOhNV/cQA5i7VoXuLLXnI74JdFX/IXw30Ev8vkulsNzaufrJ1xLcV8MHWXxol6BBYuC3rUPjymTqxTlxAXWkcq86KphXLQP5GeE8UTgdg1p1QEFv+wA+1byu6YZUG8et6Vv3yHDw2t/vgF6U30wvb+6zB9/fabUvFpog8pfT6uQw3Eb3rWkqzg+qwlVzf1az4HKTAj3bjo/fy2C8nXk0yaY/a0ov18qspvMHdl4vvEH2O9rEVMnPg4Io+ZlOpvb0RdfhT/qpg01Ss6+C5NdFfuHvj0hFxSUDZbppvmGd/C9zbq/V8T/P/snWs/+OS5BJz5VX8zPqvLNS+TM4LAk+lgQfS4KPJcHHkuBjSfCxJPhYEnwsCT6WBB9Lgo8lwceS4GNJ8LEk+FgSfCwJPpYEH0uCjyXBx5LgY0nwsST4WLrga0dKdLfC9gnfuiZ6QOsTPtHDEnwsCT6WBB9Lgo8lwceS4GNJ8LEk+FgSfCwJPpYEH0uCjyXBx5LgY0nwsST4WBJ8LAk+lgQfS4KPJcHHkuBjSfCxJPhYEnwsCT6W/gNGDwpDhp2sfQAAAABJRU5ErkJggg=="
              alt="green iguana"
            />
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 100 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="50"
              image="https://logos-world.net/wp-content/uploads/2020/04/Sony-Logo.png"
              alt="green iguana"
            />
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 100 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="50"
              image="data:image/png;base64,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"
              alt="green iguana"
            />
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 100 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="50"
              image="https://www.ergo.co.il/wp-content/uploads/thumbs/-%D7%9C%D7%95%D7%92%D7%95-%D7%90%D7%A0%D7%92%D7%9C%D7%99%D7%AA-36gqqmoopccmavfsiyv75s.png"
              alt="green iguana"
            />
          </CardActionArea>
        </Card>
      </Stack>
    </>
  );
}

export default Partners;
