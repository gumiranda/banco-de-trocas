//@ts-nocheck
import { Header, Flex, Logo, Profile, NotificationsNav, SearchBar } from "shared/ui";
import { useBreakpointValue, Icon, IconButton, useMediaQuery } from "@chakra-ui/react";
import { RiMenuLine } from "react-icons/ri";
import { useAuth, useSidebarDrawer } from "shared/libs";
import { FaWhatsapp } from "react-icons/fa";
import { SocialButton } from "shared/ui/atoms";
import { WHATSAPP_URL } from "shared/libs/utils/constants";

export const NavBar = () => {
  const { isAuthenticated } = useAuth();
  const { onOpen } = useSidebarDrawer();
  const isDesktopVersion = useBreakpointValue({ base: false, lg: true });
  const [isLargerThan560] = useMediaQuery("(min-width: 560px)");
  return (
    <Header>
      {!isDesktopVersion && (
        <IconButton
          aria-label="Open sidebar"
          fontSize="24"
          icon={<Icon as={RiMenuLine} />}
          variant="unstyled"
          onClick={onOpen}
          mr="1"
        />
      )}
      <Logo />
      {isDesktopVersion && (
        <Flex align="center" ml="auto">
          <SocialButton label={"Whatsapp"} href={WHATSAPP_URL}>
            <FaWhatsapp />
          </SocialButton>
          <Profile showProfileData={isDesktopVersion} />
        </Flex>
      )}
    </Header>
  );
};
