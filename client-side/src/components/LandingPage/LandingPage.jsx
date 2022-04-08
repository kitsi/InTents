import React from "react";
import { Box, Grid, Typography, IconButton } from "@mui/material";
import * as styles from "./LandingPageStyles";
import OutdoorGrillOutlinedIcon from '@mui/icons-material/OutdoorGrillOutlined';
import MedicalServicesOutlinedIcon from '@mui/icons-material/MedicalServicesOutlined';
import BedOutlinedIcon from '@mui/icons-material/BedOutlined';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTent, faFan, faCampground, faKitMedical, faMattressPillow, faFireBurner} from "@fortawesome/free-solid-svg-icons"

export default function LandingPage() {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.heroImage}>
        <Box sx={styles.heroTextWrapper}>
          <Typography variant="h1" sx={styles.heroText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, ea!
          </Typography>
        </Box>
      </Box>

      <Grid container sx={styles.gridContainer}>

        <Grid item xs={10} sm={5} md={3} sx={styles.gridItemContainer}>
          <Link to="/products/" style={styles.gridItemLink}>
            <Box sx={styles.gridItem}>
              <FontAwesomeIcon icon={faCampground} />
              <Typography sx={styles.gridItemCategory}>All</Typography>
            </Box>
          </Link>
        </Grid>

        <Grid item xs={10} sm={5} md={3} sx={styles.gridItemContainer}>
          <Link to="/products/categories/cookware" style={styles.gridItemLink}>
            <Box sx={styles.gridItem}>
              <FontAwesomeIcon icon={faFireBurner} />
              <Typography sx={styles.gridItemCategory}>Cookware</Typography>
            </Box>
          </Link>
        </Grid>

        <Grid item xs={10} sm={5} md={3} sx={styles.gridItemContainer}>
          <Link to="/products/categories/sleeping-bags" style={styles.gridItemLink}>
            <Box sx={styles.gridItem}>
              <FontAwesomeIcon icon={faMattressPillow} />
              <Typography sx={styles.gridItemCategory}>Sleeping Bags</Typography>
            </Box>
          </Link>
        </Grid>

        <Grid item xs={10} sm={5} md={3} sx={styles.gridItemContainer}>
          <Link to="/products/categories/fans" style={styles.gridItemLink}>
            <Box sx={styles.gridItem}>
              <FontAwesomeIcon icon={faFan} />
              <Typography sx={styles.gridItemCategory}>Fans</Typography>
            </Box>
          </Link>
        </Grid>

        <Grid item xs={10} sm={5} md={3} sx={styles.gridItemContainer}>
          <Link to="/products/categories/emergency" style={styles.gridItemLink}>
            <Box sx={styles.gridItem}>
              <FontAwesomeIcon icon={faKitMedical} />
              <Typography sx={styles.gridItemCategory}>Emergency</Typography>
            </Box>
          </Link>
        </Grid>

        <Grid item xs={10} sm={5} md={3} sx={styles.gridItemContainer}>
          <Link to="/products/categories/tents" style={styles.gridItemLink}>
            <Box sx={styles.gridItem}>
              <FontAwesomeIcon icon={faTent} />
              <Typography sx={styles.gridItemCategory}>Tents</Typography>
            </Box>
          </Link>
        </Grid>

      </Grid>
    </Box>
  )
}