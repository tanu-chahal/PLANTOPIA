import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import React from "react";
import { reviews } from "../../utils/data";
import { useRecoilState } from "recoil";
import { homeAtoms } from "../../states";

function Reviews() {
  const [start, setStart] = useRecoilState(homeAtoms.activeReview);

  return (
    <Box sx={{ ml: 10, mb: 30, userSelect: "none" }}>
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
          {reviews.map((r, i) => {
            return (
              <Box
                sx={{
                  width: start === i ? 40 : 15,
                  height: 6,
                  borderRadius: 3,
                  backgroundColor: start === i ? "#c1dcdc" : "#8f8f8f",
                }}
                key={r.id}
                onClick={() => {
                  setStart(i);
                }}
              />
            );
          })}
        </Box>
      </Box>

      <Box
        className="ReviewsSlider"
        sx={{ overflow: "hidden", display: "flex", gap: 5 }}
      >
        {reviews.slice(start, start + 2).map((r) => {
          return (
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
              key={r.id}
            >
              <Typography color="secondary" component="p" variant="h6">
                {r.id} {r.desc}
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
                    src={r.img}
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
                    <Typography component="h6" variant="subtitle1">
                      {r.name}
                    </Typography>
                    <Typography
                      color="secondary"
                      component="p"
                      variant="subtitle3"
                    >
                      {r.profession}
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <StarIcon />
                  <Typography
                    component="h6"
                    variant="h6"
                    sx={{ fontWeight: 700 }}
                  >
                    {" "}
                    {r.rating}
                  </Typography>
                </Box>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}

export default Reviews;
