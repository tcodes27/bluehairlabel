import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import { shades } from "../../theme";

function Footer() {
  const {
    palette: { neutral },
  } = useTheme();
  return (
    <Box marginTop="70px" padding="40px 0" backgroundColor={neutral.light}>
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        rowGap="30px"
        columnGap="clamp(20px, 30px, 40px)"
      >
        <Box width="clamp(20%, 30%, 40%)">
          <Typography
            variant="h4"
            fontWeight="bold"
            mb="30px"
            color={shades.secondary[500]}
          >
            Blue Hair Label
          </Typography>
          <div>
            Sed sit perferendis commodi quia in cumque. Voluptatibus et dolore
            necessitatibus. Quae reiciendis magni nesciunt quis asperiores eos
            consequatur facere. Beatae saepe eos. Ducimus ea sapiente. Debitis
            facilis tempore officiis eligendi in nostrum ut. Eum similique neque
            optio quia molestiae nam. Eius eligendi impedit quia. Repellat aut
            temporibus velit natus ut architecto alias.
          </div>
        </Box>

        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            About Us
          </Typography>
          <Typography mb="30px">Careers</Typography>
          <Typography mb="30px">Our Stores</Typography>
          <Typography mb="30px">Terms & Conditions</Typography>
          <Typography mb="30px">Privacy Policy</Typography>
        </Box>

        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Customer Care
          </Typography>
          <Typography mb="30px">Help Center</Typography>
          <Typography mb="30px">Track Your Order</Typography>
          <Typography mb="30px">Corporate & Bulk Purchasing</Typography>
          <Typography mb="30px">Returns & Refunds</Typography>
        </Box>

        <Box width="clamp(20%, 25%, 30%)">
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Contact Us
          </Typography>
          <Typography mb="30px">
            8383 WilShire Blvd Beverly Hills, CA 90212
          </Typography>
          <Typography mb="30px" sx={{ wordWrap: "break-word" }}>
            Email: info@bluehairlabel.com
          </Typography>
          <Typography mb="30px">(323) 385-0000</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
