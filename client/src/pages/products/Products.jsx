import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Container from "@mui/material/Container";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";
import Card from "../../components/card/Card.jsx";
import {productAtoms, productSelectors } from "../../states";

function Products() {
  const navigate = useNavigate();
  const [catFilter, setCatFilter] = useRecoilState(productAtoms.productListFilterState);
  const [priceFilter, setPriceFilter] = useRecoilState(productAtoms.productListPriceState);
  const [sortFilter, setSortFilter] = useRecoilState(productAtoms.productListSortState);
  const breadcrumbs = [
    <Typography
      key="home"
      color="secondary"
      component="p"
      variant="subtitle2"
      sx={{ cursor: "pointer", "&:hover": { color: "#484c4c" } }}
      onClick={() => navigate("/")}
    >
      Home
    </Typography>,
    <Typography
      key="products"
      color="secondary"
      component="p"
      variant="subtitle2"
      sx={{ cursor: "pointer", "&:hover": { color: "#484c4c" } }}
      onClick={() => navigate("/products")}
    >
      Products
    </Typography>,
  ];
  const plants = useRecoilValue(productSelectors.filteredProductListState);

  const handleCategory = (e) => {
    setCatFilter(e.target.value);
  };
  const handleSortType = (e) => {
    setSortFilter(e.target.value);
  };
  const handlePrice = (e) => {
    setPriceFilter(e.target.value);
  };

  return (
    <Box
      className="Products"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 5,
        overflow: "auto",
        alignItems: "center",
      }}
    >
      <Breadcrumbs
        separator="›"
        aria-label="breadcrumb"
        sx={{ alignSelf: "flex-start", mx: 5 }}
      >
        {breadcrumbs}
      </Breadcrumbs>

      <Container
        className="top"
        maxwidth="xl"
        sx={{
          py: 5,
          width: "100%",
          display: "flex",
          alignItems: "center",
          gap: 40,
          justifyContent: "flex-end",
        }}
      >
        <FormControl fullWidth>
          <InputLabel id="category">Category</InputLabel>
          <Select
            labelId="category"
            id="category-select"
            value={catFilter}
            label="Category"
            onChange={handleCategory}
            sx={{ width: "250px" }}
          >
            <MenuItem value="All">All</MenuItem>
            <MenuItem value="Herb Plants">Herb Plants</MenuItem>
            <MenuItem value="Floral Plants">Floral Plants</MenuItem>
            <MenuItem value="Natural Plants">Natural Plants</MenuItem>
            <MenuItem value="Artificial Plants">Artificial Plants</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel id="price">Price</InputLabel>
          <Select
            labelId="price"
            id="price-select"
            value={priceFilter}
            label="Price"
            onChange={handlePrice}
            sx={{ width: "250px", color: "black", outlineColor: "black" }}
          >
            <MenuItem value={300}> {"<="} 300</MenuItem>
            <MenuItem value={500}>{"<="} 500</MenuItem>
            <MenuItem value={700}>{"<="} 700</MenuItem>
            <MenuItem value={1000}>{"<="} 1000</MenuItem>
            <MenuItem value={2000}>{"<="} 2000</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth sx={{ mx: "auto" }}>
          <InputLabel id="sort-by">Sort By</InputLabel>
          <Select
            labelId="sort-by"
            id="sort-by-select"
            value={sortFilter}
            label="Sort By"
            onChange={handleSortType}
            sx={{ width: "250px" }}
          >
            <MenuItem value="rating">Rating</MenuItem>
            <MenuItem value="createdAt">Newest</MenuItem>
            <MenuItem value="sales">Popular</MenuItem>
            <MenuItem value="price">Price</MenuItem>
          </Select>
        </FormControl>
      </Container>

      <Box
        className="bottom"
        sx={{
          display: "flex",
          gap: 5,
          flexWrap: "wrap",
          justifyContent: "center",
          minHeight: "500px",
        }}
      >
        {plants.length !== 0 ? (
          plants.map((p) => {
            return (
              <Card
                key={p.id}
                id={p.id}
                name={p.plantName}
                img={p.img}
                category={p.category}
                price={p.price}
                rate={p.rating}
                desc={p.desc}
              />
            );
          })
        ) : (
          <Typography key={0} component="h4" variant="h6" color="secondary">
            No Items Found.
          </Typography>
        )}
      </Box>

      <Pagination count={2} color="primary" sx={{ mb: 10 }} />
    </Box>
  );
}

export default Products;
