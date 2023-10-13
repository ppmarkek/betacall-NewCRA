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
  MessagesList,
  AllMessages,
  Chat,
  SelectChatButton,
  AvaratImg,
  SelectChatGrid,
  StyledMoreHorizIcon,
  EditButtons,
  SelectMessage,
  SelectMessageImg,
  MessagesGrid,
  MyMessageGrid,
  MyMessageText,
  FrendsMessageText,
  FrendsMessageGrid,
} from "./style";
import Text from "../../atoms/Text/Text";
import Avatar from "../../../assets/Image/Avatar.svg";
import SelectMessageImage from "../../../assets/MessagesIcon/SelectMessage.svg";

const Messages = () => {
  const [category, setCategory] = useState("All Events");
  const [chat, setChat] = useState("None");

  return (
    <Wrapper container>
      <Category item xs={3} container>
        <NewCategory container>
          <Grid container height="110px">
            <Grid container padding="20px 0">
              <SelectCategoryButton
                $background={category === "All Events" ? "#F8F9FC" : "#fff"}
                onClick={() => setCategory("All Events")}
              >
                <StyledFolderIcon
                  $color={
                    category === "All Events" ? "rgba(107, 89, 204, 1)" : "rgba(128, 131, 163, 1)"
                  }
                />

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
      <MessagesList item xs={9} container>
        <AllMessages item xs={3.3} container>
          <SelectChatButton
            onClick={() => setChat("6523eda337c3f925b6d2e479")}
            $background={chat === "6523eda337c3f925b6d2e479" ? "#f8f9fc" : "fff"}
          >
            <SelectChatGrid container>
              <AvaratImg src={Avatar} alt="Avatar" />
              <Grid width={"65%"}>
                <Grid container gap={"5px"}>
                  <Text variant={"BOLD"} small>
                    Helena Chavez
                  </Text>
                  <Text variant={"LIGHT"} small>
                    11:52AM
                  </Text>
                </Grid>
                <Grid width={"100%"}>
                  <Text variant={"LIGHT"} small>
                    How To Write Better Advertising
                  </Text>
                </Grid>
              </Grid>
              <EditButtons>
                <StyledMoreHorizIcon />
              </EditButtons>
            </SelectChatGrid>
          </SelectChatButton>
        </AllMessages>
        <Grid item xs={8.7} padding={"20px"}>
          {chat === "None" ? (
            <SelectMessage container>
              <SelectMessageImg src={SelectMessageImage} />
              <Text variant={"H1"}>Select message</Text>
              <Text variant={"LIGHT"}>Select a chat to start messaging</Text>
            </SelectMessage>
          ) : (
            <Chat container>
              <MessagesGrid container>
                <Grid container justifyContent={"flex-end"}>
                  <MyMessageGrid container>
                    <Grid>
                      <Grid
                        container
                        gap={"5px"}
                        justifyContent={"flex-end"}
                        paddingBottom={"10px"}
                      >
                        <Text variant={"LIGHT"} small>
                          8:20 PM
                        </Text>
                        <Text variant={"BOLD"} small>
                          Rose Nguyen
                        </Text>
                      </Grid>
                      <MyMessageText>
                        <Text variant={"REGULAR"} color={"#fff"}>
                          Freelance Design Tricks
                        </Text>
                      </MyMessageText>
                    </Grid>
                    <AvaratImg src={Avatar} alt="Avatar" />
                  </MyMessageGrid>
                </Grid>
                <Grid container>
                  <FrendsMessageGrid>
                    <AvaratImg src={Avatar} alt="Avatar" />
                    <Grid maxWidth={"90%"}>
                      <Grid container gap={"5px"} paddingBottom={"10px"}>
                        <Text variant={"LIGHT"} small>
                          8:21 PM
                        </Text>
                        <Text variant={"BOLD"} small>
                          Sallie Wade
                        </Text>
                      </Grid>
                      <FrendsMessageText>
                        <Text variant={"REGULAR"}>
                          You don’t need to have a full time ecommerce business to earn a little
                          extra money through your website. You don’t even need to be there all the
                          time. All you need to do is wait for the day your advertisers will pay
                          you.
                        </Text>
                      </FrendsMessageText>
                    </Grid>
                  </FrendsMessageGrid>
                </Grid>
              </MessagesGrid>
            </Chat>
          )}
        </Grid>
      </MessagesList>
    </Wrapper>
  );
};

export default Messages;
