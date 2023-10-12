import { Grid } from "@mui/material";
import { useState } from "react";
import {
  Border,
  Category,
  NewCategory,
  SelectCategoryButton,
  StyledFolderIcon,
  StyledStarIcon,
  StyledAlarmIcon,
  Wrapper,
  StyledModeIcon,
} from "./style";
import Text from "../../atoms/Text/Text";

const Messages = () => {
  const [category, setCategory] = useState("All Events");

  return (
    <Wrapper>
      <Category item xs={3} container>
        <NewCategory container>
          <Grid container height="110px">
            <Grid container padding="20px 0">
              <SelectCategoryButton
                $background={category === "All Events" ? "#F8F9FC" : "#fff"}
                onClick={() => setCategory("All Events")}
              >
                {category === "All Events" ? (
                  <StyledFolderIcon $color={"rgba(107, 89, 204, 1)"} />
                ) : (
                  <StyledFolderIcon $color={"rgba(128, 131, 163, 1)"} />
                )}

                <Grid container>
                  <Grid container justifyContent="space-between">
                    <Text variant="BOLD" color={category === "All Events" ? "#6B59CC" : "#1A1C1D"}>
                      All Events
                    </Text>
                    {/* {allEventsRequests.length >= 1 && (
                    <EventsLength container>{allEventsRequests.length}</EventsLength>
                  )} */}
                  </Grid>
                  <Text variant="LIGHT">All messages unified</Text>
                </Grid>
              </SelectCategoryButton>
            </Grid>
            <Border />
          </Grid>
          <Grid container height="110px">
            <Grid container padding="20px 0">
              <SelectCategoryButton
                $background={category === "Starred" ? "#F8F9FC" : "#fff"}
                onClick={() => setCategory("Starred")}
              >
                <Grid container alignItems="center" gap="22px">
                  <StyledStarIcon
                    $color={
                      category === "Starred" ? "rgba(107, 89, 204, 1)" : "rgba(128, 131, 163, 1)"
                    }
                  />
                  <Grid>
                    <Text variant="BOLD" color={category === "Starred" ? "#6B59CC" : "#1A1C1D"}>
                      Starred
                    </Text>
                    <Text variant="LIGHT">All messages unified</Text>
                  </Grid>
                </Grid>
              </SelectCategoryButton>
            </Grid>
            <Border />
          </Grid>
          <Grid container height="110px">
            <Grid container padding="20px 0">
              <SelectCategoryButton
                $background={category === "Snoozed" ? "#F8F9FC" : "#fff"}
                onClick={() => setCategory("Snoozed")}
              >
                <Grid container alignItems="center" gap="22px">
                  <StyledAlarmIcon
                    $color={
                      category === "Snoozed" ? "rgba(107, 89, 204, 1)" : "rgba(128, 131, 163, 1)"
                    }
                  />
                  <Grid>
                    <Text variant="BOLD" color={category === "Snoozed" ? "#6B59CC" : "#1A1C1D"}>
                      Snoozed
                    </Text>
                    <Text variant="LIGHT">Will appear later</Text>
                  </Grid>
                </Grid>
              </SelectCategoryButton>
            </Grid>
            <Border />
          </Grid>
          <Grid container height="110px">
            <Grid container padding="20px 0">
              <SelectCategoryButton
                $background={category === "Drafts" ? "#F8F9FC" : "#fff"}
                onClick={() => setCategory("Drafts")}
              >
                <Grid container alignItems="center" gap="22px">
                  <StyledModeIcon
                    $color={
                      category === "Drafts" ? "rgba(107, 89, 204, 1)" : "rgba(128, 131, 163, 1)"
                    }
                  />
                  <Grid>
                    <Text variant="BOLD" color={category === "Drafts" ? "#6B59CC" : "#1A1C1D"}>
                      Drafts
                    </Text>
                    <Text variant="LIGHT">Re-edit your messages </Text>
                  </Grid>
                </Grid>
              </SelectCategoryButton>
            </Grid>
            <Border />
          </Grid>
        </NewCategory>
      </Category>
    </Wrapper>
  );
};

export default Messages;
