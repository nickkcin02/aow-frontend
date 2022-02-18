import React from "react";
import RNDBox from "../components/rnd/RNDBox";
import { useState } from "react";
import {
  Container,
  Heading,
  Grid,
  GridItem,
  Box,
  Accordion,
  AccordionPanel,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  Button,
} from "@chakra-ui/react";

export default function Dashboard() {
  const buy = ["#DC267F"];
  const sell = ["#648FFF"];
  const [indicators, setIndicators] = useState([
    {
      color: buy,
      width: 50,
      height: 25,
      message: "MACD USD/EUR",
      value: 1.1651,
    },
    {
      color: sell,
      width: 50,
      height: 25,
      message: "Moving average USD/EUR",
      value: 1.5942,
    },
  ]);

  const handleClickGenerate = () => {
    if (indicators.length < 4) {
      setIndicators((indicators) => [
        ...indicators,
        {
          color: buy,
          width: 50,
          height: 25,
          message: "Test new xxx",
          value: 1.1651,
        },
      ]);
    }
  };

  return (
    <>
      <Container maxW="container.xl">
        <Heading as="h2" size="xl">
          Dashboard
        </Heading>

        <Box>
          <Grid templateColumns="repeat(10, 1fr)" gap={6}>
            <GridItem colSpan={7} height="500px">
              <Box mt={7} h={500} border="1px" borderColor="gray.200">
                {indicators.map((i) => {
                  return (
                    <>
                      <RNDBox
                        color={i.color}
                        width={i.width}
                        height={i.height}
                        message={i.message}
                        value={i.value}
                      />
                    </>
                  );
                })}
              </Box>
            </GridItem>
            <GridItem colSpan={3} height="500px">
              <Accordion mt={7}>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        Generate Box
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Button onClick={handleClickGenerate}>
                      Click to generate
                    </Button>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        Menu 2
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Button onClick={handleClickGenerate}>
                      Click to generate
                    </Button>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </GridItem>
          </Grid>
        </Box>
      </Container>
    </>
  );
}
