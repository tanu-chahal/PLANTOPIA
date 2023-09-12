import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import React from "react";

function Reviews() {
  return (
    <Box sx={{ ml: 10, mb: 30, userSelect:'none' }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          mt: 15,
          mb: 5,
        }}
      >
        <Typography
          variant="h4"
          component="h4"
          sx={{ fontWeight: 800, maxWidth: 500 }}
        >
          What customers say about PLANTOPIA?
        </Typography>
        <Box className="sliderDots" sx={{ display: "flex", gap: 1, mr: 10 }}>
          <Box
            sx={{
              width: 40,
              height: 6,
              borderRadius: 3,
              backgroundColor: "#c1dcdc",
            }}
          />
          <Box
            sx={{
              width: 15,
              height: 6,
              borderRadius: 3,
              backgroundColor: "#8f8f8f",
            }}
          />
          <Box
            sx={{
              width: 15,
              height: 6,
              borderRadius: 3,
              backgroundColor: "#8f8f8f",
            }}
          />
        </Box>
      </Box>

      <Box
        className="ReviewsSlider"
        sx={{ overflow: "hidden", display: "flex", gap: 5 }}
      >
        <Box
          sx={{
            backgroundColor: "#c1dcdc",
            width: 800,
            p: 5,
            borderRadius: 5,
            display: "flex",
            flexDirection: "column",
            gap: 5,
            height: 250,
            flexShrink: 0,
          }}
        >
          <Typography color="secondary" component="p" variant="h6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque
            fugiat modi a, quasi enim libero suscipit ipsam omnis placeat quam.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
            dignissimos.
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <Box sx={{ display: "flex", gap: 3 }}>
              <img
                src="/img/reviewer-1.jpg"
                alt=""
                style={{
                  width: "100px",
                  height: "100px",
                  objectFit: "cover",
                  border: "2px solid black",
                  borderRadius: "50%",
                }}
              />
              <Box>
                <Typography
                  component="h6"
                  variant="subtitle1"
                >
                  John Doe
                </Typography>
                <Typography color="secondary" component="p" variant="subtitle3">
                  Youtuber
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <StarIcon />
              <Typography component="h6" variant="h6" sx={{ fontWeight: 700 }}>
                {" "}
                4.5
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            backgroundColor: "#c1dcdc",
            width: 800,
            p: 5,
            borderRadius: 5,
            display: "flex",
            flexDirection: "column",
            gap: 5,
            height: 250,
            flexShrink: 0,
          }}
        >
          <Typography color="secondary" component="p" variant="h6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque
            fugiat modi a, quasi enim libero suscipit ipsam omnis placeat quam.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
            dignissimos.
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <Box sx={{ display: "flex", gap: 3 }}>
              <img
                src="/img/reviewer-2.jpeg"
                alt=""
                style={{
                  width: "100px",
                  height: "100px",
                  objectFit: "cover",
                  border: "2px solid black",
                  borderRadius: "50%",
                }}
              />
              <Box>
                <Typography
                  component="h6"
                  variant="subtitle1"
                >
                  John Doe
                </Typography>
                <Typography color="secondary" component="p" variant="subtitle3">
                  Youtuber
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <StarIcon />
              <Typography component="h6" variant="h6" sx={{ fontWeight: 800 }}>
                {" "}
                4.5
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            backgroundColor: "#c1dcdc",
            width: 800,
            p: 5,
            borderRadius: 5,
            display: "flex",
            flexDirection: "column",
            gap: 5,
            height: 250,
            flexShrink: 0,
          }}
        >
          <Typography color="secondary" component="p" variant="h6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque
            fugiat modi a, quasi enim libero suscipit ipsam omnis placeat quam.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
            dignissimos.
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <Box sx={{ display: "flex", gap: 3 }}>
              <img
                src="/img/reviewer-2.jpeg"
                alt=""
                style={{
                  width: "100px",
                  height: "100px",
                  objectFit: "cover",
                  border: "2px solid black",
                  borderRadius: "50%",
                }}
              />
              <Box>
                <Typography
                  component="h6"
                  variant="subtitle1"
                >
                  John Doe
                </Typography>
                <Typography color="secondary" component="p" variant="subtitle3">
                  Youtuber
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <StarIcon />
              <Typography component="h6" variant="h6" sx={{ fontWeight: 800 }}>
                {" "}
                4.5
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Reviews;
