import { Stack, NavLink, NavSection, Sidebar } from "shared/ui";
import { RiContactsLine } from "react-icons/ri";
import { useAuth } from "shared/libs";

export const SidebarPanel = () => {
  return (
    <Sidebar title="Navegação">
      <Stack spacing="0" align="flex-start">
        <NavSection title="GERAL">
          <NavLink icon={RiContactsLine} href="/imovels/create">
            Anuncie seu imóvel
          </NavLink>
        </NavSection>
      </Stack>
    </Sidebar>
  );
};
