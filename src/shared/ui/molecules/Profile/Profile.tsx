import { Box, Flex, Text, Avatar } from "shared/ui/atoms";
import { useAuth } from "shared/libs";

type ProfileProps = {
  showProfileData?: boolean;
};
export const Profile = ({ showProfileData }: ProfileProps) => {
  const { user } = useAuth();

  return (
    <Flex align="center" mr={["2", "2", "0", "0"]}>
      {showProfileData && (
        <Box mr="4" textAlign="right" datatestid="ProfileTestId">
          <Text>Gilson Aguiar</Text>
          <Text color="gray.300" fontSize="small">
            {user?.email}
          </Text>
        </Box>
      )}
      <Avatar name="Gilson Aguiar" size="md" src="https://iili.io/H6MlvRI.png" />
    </Flex>
  );
};
