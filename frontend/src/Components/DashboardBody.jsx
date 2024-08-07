import { Box, Grid, GridItem, useColorModeValue } from "@chakra-ui/react";
import HallCard from "./HallCard";

export default function DashboardBody() {
  return (
    <Box
      ml={{ base: 0, md: 60 }}
      bg={useColorModeValue("gray.100", "gray.900")}
      p="4"
      minH={"85vh"}
    >
      <Box pl="10" pr="10">
        <Grid templateColumns="repeat(3, 2fr)" gap={6}>
          <GridItem w="100%">
            <HallCard
              imgsrc="https://naac.kongu.edu/aqar/2022_23/cr4_1_3/images/mbaseminarhall007.jpg"
              // imgsrc="https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"
              block="IT PARK"
              hall="SEMINAR HALL 1" 
              capacity="500"
            ></HallCard>
          </GridItem>
          <GridItem w="100%">
            <HallCard
              imgsrc="https://kongu.ac.in/source/recentupdates/14.jpg"
              block="ADMIN"
              hall="SEMINAR HALL 2"
              capacity="300"
            ></HallCard>
          </GridItem>
          <GridItem w="100%">
            <HallCard
              imgsrc="https://th.bing.com/th/id/R.6a70ac69c8ef5c0b612b409fbab153ed?rik=mZaC8CBcvF5e%2fw&riu=http%3a%2f%2fkongu.ac.in%2fwebalbum%2fimg%2fconvention.jpg&ehk=xns50k5HIc7GSGHeET4IgF3yDDSfHFK0UcriAXMpDfU%3d&risl=&pid=ImgRaw&r=0"
              block="EEE"
              hall="SEMINAR HALL 3"
              capacity="400"
            ></HallCard>
          </GridItem>{" "}
          <GridItem w="100%">
            <HallCard
              imgsrc="https://kongu.ac.in/source/recentupdates/43.jpg"   //img
              block="FT"
              hall="SEMINAR HALL 4"
              capacity="350"
            ></HallCard>
          </GridItem>{" "}
          <GridItem w="100%">
            <HallCard
              imgsrc="https://getmyuni.azureedge.net/college-images-test/kongu-engineering-college-kec-erode/93ed78369acd4e87a7fface35ab9af04.jpeg"  //img
              block="MBA"
              hall="SEMINAR HALL 5"
              capacity="350"
            ></HallCard>
          </GridItem>{" "}
          <GridItem w="100%">
            <HallCard
              imgsrc="https://kongu.ac.in/source/recentupdates/68.jpg"   //img
              block="KEC"
              hall="SEMINAR HALL 6"
              capacity="100"
            ></HallCard>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
}
