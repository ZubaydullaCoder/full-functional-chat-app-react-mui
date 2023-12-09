import { Box, Stack, Typography } from "@mui/material";

const Chat = () => {
  return (
    <>
      <Box
        sx={{
          position: "relative",
          height: "100vh",
          width: 320,
          backgroundColor: "#F8FAFF",
          boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
        }}
      >
        <Stack>
          <Typography variant="h5">Chats</Typography>
        </Stack>
      </Box>
    </>
  );
};

export default Chat;
