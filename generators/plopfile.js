/* eslint-disable quotes */
module.exports = function (plop) {
  plop.setGenerator("component", {
    description: "Create a component",
    prompts: [
      {
        type: "input",
        name: "type",
        message: "put the ui file in atoms, molecules, organisms or templates?",
      },
      {
        type: "input",
        name: "name",
        message: "what the name of component?",
      },
    ],
    actions: [
      // {
      //   type: "add",
      //   path: "../src/shared/ui/{{camelCase type}}/{{pascalCase name}}/{{pascalCase name}}.test.tsx",
      //   templateFile: "templates/Component/Component.test.tsx.hbs",
      // },
      {
        type: "add",
        path: "../src/shared/ui/{{camelCase type}}/{{pascalCase name}}/{{pascalCase name}}.tsx",
        templateFile: "templates/Component/Component.tsx.hbs",
      },
      {
        type: "add",
        path: "../src/shared/ui/{{camelCase type}}/{{pascalCase name}}/index.ts",
        templateFile: "templates/Component/index.ts.hbs",
      },
      {
        type: "modify",
        path: "../src/shared/ui/{{camelCase type}}/index.ts",
        pattern: /(\/\/ IMPORT MODULE FILES)/g,
        template: '$1\nexport * from "./{{pascalCase name}}";',
      },
    ],
  });
  plop.setGenerator("crud", {
    description: "Create a crud",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "what the name of crud?",
      },
      {
        type: "input",
        name: "label",
        message: "what the label of crud?",
      },
    ],
    actions: [...entities, ...features, ...pages, ...screens],
  });
  plop.setGenerator("slice", {
    description: "Create a slice",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "what the name of slice?",
      },
    ],
    actions: [...controllers, ...useCases, ...repositories],
  });
};
const entities = [
  {
    type: "add",
    path: "../src/entidades/{{camelCase name}}/{{camelCase name}}.ui.tsx",
    templateFile: "templates/crud/entidades/domain.ui.tsx.hbs",
  },
  {
    type: "add",
    path: "../src/entidades/{{camelCase name}}/{{camelCase name}}.model.ts",
    templateFile: "templates/crud/entidades/domain.model.ts.hbs",
  },
  {
    type: "add",
    path: "../src/entidades/{{camelCase name}}/{{camelCase name}}.lib.ts",
    templateFile: "templates/crud/entidades/domain.lib.ts.hbs",
  },
  {
    type: "add",
    path: "../src/entidades/{{camelCase name}}/{{camelCase name}}.api.ts",
    templateFile: "templates/crud/entidades/domain.api.ts.hbs",
  },
  {
    type: "add",
    path: "../src/entidades/{{camelCase name}}/index.ts",
    templateFile: "templates/crud/entidades/index.ts.hbs",
  },
  {
    type: "add",
    path: "../src/entidades/{{camelCase name}}/details/index.ts",
    templateFile: "templates/crud/entidades/details/index.ts.hbs",
  },
  {
    type: "add",
    path: "../src/entidades/{{camelCase name}}/details/{{pascalCase name}}Details.tsx",
    templateFile: "templates/crud/entidades/details/DomainDetails.tsx.hbs",
  },
];
const features = [
  {
    type: "add",
    path: "../src/features/{{camelCase name}}/create/create{{pascalCase name}}.hook.ts",
    templateFile: "templates/crud/features/create/createDomain.hook.ts.hbs",
  },
  {
    type: "add",
    path: "../src/features/{{camelCase name}}/edit/edit{{pascalCase name}}.hook.ts",
    templateFile: "templates/crud/features/edit/editDomain.hook.ts.hbs",
  },
  {
    type: "add",
    path: "../src/features/{{camelCase name}}/create/create{{pascalCase name}}.lib.ts",
    templateFile: "templates/crud/features/create/createDomain.lib.ts.hbs",
  },
  {
    type: "add",
    path: "../src/features/{{camelCase name}}/edit/edit{{pascalCase name}}.lib.ts",
    templateFile: "templates/crud/features/edit/editDomain.lib.ts.hbs",
  },
  {
    type: "add",
    path: "../src/features/{{camelCase name}}/edit/Edit{{pascalCase name}}Form.tsx",
    templateFile: "templates/crud/features/edit/EditDomainForm.tsx.hbs",
  },
  {
    type: "add",
    path: "../src/features/{{camelCase name}}/create/Create{{pascalCase name}}Form.tsx",
    templateFile: "templates/crud/features/create/CreateDomainForm.tsx.hbs",
  },
  {
    type: "add",
    path: "../src/features/{{camelCase name}}/create/index.ts",
    templateFile: "templates/crud/features/create/index.ts.hbs",
  },
  {
    type: "add",
    path: "../src/features/{{camelCase name}}/edit/index.ts",
    templateFile: "templates/crud/features/edit/index.ts.hbs",
  },
];
const pages = [
  {
    type: "add",
    path: "../src/pages/{{camelCase name}}s/create.tsx",
    templateFile: "templates/crud/pages/create.tsx.hbs",
  },
  {
    type: "add",
    path: "../src/pages/{{camelCase name}}s/list.tsx",
    templateFile: "templates/crud/pages/list.tsx.hbs",
  },
  {
    type: "add",
    path: "../src/pages/{{camelCase name}}s/[page].tsx",
    templateFile: "templates/crud/pages/[page].tsx.hbs",
  },
  {
    type: "add",
    path: "../src/pages/{{camelCase name}}s/details/[id].tsx",
    templateFile: "templates/crud/pages/details/[id].tsx.hbs",
  },
  {
    type: "add",
    path: "../src/pages/{{camelCase name}}s/edit/[id].tsx",
    templateFile: "templates/crud/pages/edit/[id].tsx.hbs",
  },
];
const screens = [
  {
    type: "add",
    path: "../src/screens/{{camelCase name}}/edit/{{pascalCase name}}EditPage.tsx",
    templateFile: "templates/crud/screens/edit/DomainEditPage.tsx.hbs",
  },
  {
    type: "add",
    path: "../src/screens/{{camelCase name}}/create/{{pascalCase name}}CreatePage.tsx",
    templateFile: "templates/crud/screens/create/DomainCreatePage.tsx.hbs",
  },
  {
    type: "add",
    path: "../src/screens/{{camelCase name}}/create/index.ts",
    templateFile: "templates/crud/screens/create/index.ts.hbs",
  },
  {
    type: "add",
    path: "../src/screens/{{camelCase name}}/edit/index.ts",
    templateFile: "templates/crud/screens/edit/index.ts.hbs",
  },
  {
    type: "add",
    path: "../src/screens/{{camelCase name}}/details/{{pascalCase name}}DetailsPage.tsx",
    templateFile: "templates/crud/screens/details/DomainDetailsPage.tsx.hbs",
  },
  {
    type: "add",
    path: "../src/screens/{{camelCase name}}/details/index.ts",
    templateFile: "templates/crud/screens/details/index.ts.hbs",
  },
  {
    type: "add",
    path: "../src/screens/{{camelCase name}}/list/grid/index.ts",
    templateFile: "templates/crud/screens/list/grid/index.ts.hbs",
  },
  {
    type: "add",
    path: "../src/screens/{{camelCase name}}/list/table/index.ts",
    templateFile: "templates/crud/screens/list/table/index.ts.hbs",
  },
  {
    type: "add",
    path: "../src/screens/{{camelCase name}}/list/grid/{{pascalCase name}}ListGridPage.tsx",
    templateFile: "templates/crud/screens/list/grid/DomainListGridPage.tsx.hbs",
  },
  {
    type: "add",
    path: "../src/screens/{{camelCase name}}/list/table/{{pascalCase name}}ListTablePage.tsx",
    templateFile: "templates/crud/screens/list/table/DomainListTablePage.tsx.hbs",
  },
  {
    type: "add",
    path: "../src/screens/{{camelCase name}}/list/{{camelCase name}}InfiniteList.hook.ts",
    templateFile: "templates/crud/screens/list/domainInfiniteList.hook.ts.hbs",
  },
  {
    type: "add",
    path: "../src/screens/{{camelCase name}}/list/{{camelCase name}}List.hook.ts",
    templateFile: "templates/crud/screens/list/domainList.hook.ts.hbs",
  },
];

const controllers = [
  {
    type: "add",
    path: "../src/slices/{{camelCase name}}/controllers/index.ts",
    templateFile: "templates/domain/controllers/index.ts.hbs",
  },
  {
    type: "add",
    path: "../src/slices/{{camelCase name}}/controllers/add{{pascalCase name}}/add{{pascalCase name}}Controller.ts",
    templateFile: "templates/domain/controllers/addDomain/addDomainController.ts.hbs",
  },
  {
    type: "add",
    path: "../src/slices/{{camelCase name}}/controllers/add{{pascalCase name}}/add{{pascalCase name}}ControllerFactory.ts",
    templateFile:
      "templates/domain/controllers/addDomain/addDomainControllerFactory.ts.hbs",
  },
  {
    type: "add",
    path: "../src/slices/{{camelCase name}}/controllers/add{{pascalCase name}}/index.ts",
    templateFile: "templates/domain/controllers/addDomain/index.ts.hbs",
  },
  {
    type: "add",
    path: "../src/slices/{{camelCase name}}/controllers/delete{{pascalCase name}}/delete{{pascalCase name}}Controller.ts",
    templateFile:
      "templates/domain/controllers/deleteDomain/deleteDomainController.ts.hbs",
  },
  {
    type: "add",
    path: "../src/slices/{{camelCase name}}/controllers/delete{{pascalCase name}}/delete{{pascalCase name}}ControllerFactory.ts",
    templateFile:
      "templates/domain/controllers/deleteDomain/deleteDomainControllerFactory.ts.hbs",
  },
  {
    type: "add",
    path: "../src/slices/{{camelCase name}}/controllers/delete{{pascalCase name}}/index.ts",
    templateFile: "templates/domain/controllers/deleteDomain/index.ts.hbs",
  },
  {
    type: "add",
    path: "../src/slices/{{camelCase name}}/controllers/load{{pascalCase name}}/load{{pascalCase name}}Controller.ts",
    templateFile: "templates/domain/controllers/loadDomain/loadDomainController.ts.hbs",
  },
  {
    type: "add",
    path: "../src/slices/{{camelCase name}}/controllers/load{{pascalCase name}}/load{{pascalCase name}}ControllerFactory.ts",
    templateFile:
      "templates/domain/controllers/loadDomain/loadDomainControllerFactory.ts.hbs",
  },
  {
    type: "add",
    path: "../src/slices/{{camelCase name}}/controllers/load{{pascalCase name}}/index.ts",
    templateFile: "templates/domain/controllers/loadDomain/index.ts.hbs",
  },
  {
    type: "add",
    path: "../src/slices/{{camelCase name}}/controllers/update{{pascalCase name}}/update{{pascalCase name}}Controller.ts",
    templateFile:
      "templates/domain/controllers/updateDomain/updateDomainController.ts.hbs",
  },
  {
    type: "add",
    path: "../src/slices/{{camelCase name}}/controllers/update{{pascalCase name}}/update{{pascalCase name}}ControllerFactory.ts",
    templateFile:
      "templates/domain/controllers/updateDomain/updateDomainControllerFactory.ts.hbs",
  },
  {
    type: "add",
    path: "../src/slices/{{camelCase name}}/controllers/update{{pascalCase name}}/index.ts",
    templateFile: "templates/domain/controllers/updateDomain/index.ts.hbs",
  },
  {
    type: "add",
    path: "../src/slices/{{camelCase name}}/controllers/load{{pascalCase name}}ByPage/load{{pascalCase name}}ByPageController.ts",
    templateFile:
      "templates/domain/controllers/loadDomainByPage/loadDomainByPageController.ts.hbs",
  },
  {
    type: "add",
    path: "../src/slices/{{camelCase name}}/controllers/load{{pascalCase name}}ByPage/load{{pascalCase name}}ByPageControllerFactory.ts",
    templateFile:
      "templates/domain/controllers/loadDomainByPage/loadDomainByPageControllerFactory.ts.hbs",
  },
  {
    type: "add",
    path: "../src/slices/{{camelCase name}}/controllers/load{{pascalCase name}}ByPage/index.ts",
    templateFile: "templates/domain/controllers/loadDomainByPage/index.ts.hbs",
  },
];
const useCases = [
  {
    type: "add",
    path: "../src/slices/{{camelCase name}}/useCases/index.ts",
    templateFile: "templates/domain/useCases/index.ts.hbs",
  },
  {
    type: "add",
    path: "../src/slices/{{camelCase name}}/useCases/add{{pascalCase name}}/add{{pascalCase name}}.ts",
    templateFile: "templates/domain/useCases/addDomain/addDomain.ts.hbs",
  },
  {
    type: "add",
    path: "../src/slices/{{camelCase name}}/useCases/add{{pascalCase name}}/add{{pascalCase name}}Factory.ts",
    templateFile: "templates/domain/useCases/addDomain/addDomainFactory.ts.hbs",
  },
  {
    type: "add",
    path: "../src/slices/{{camelCase name}}/useCases/add{{pascalCase name}}/index.ts",
    templateFile: "templates/domain/useCases/addDomain/index.ts.hbs",
  },
  {
    type: "add",
    path: "../src/slices/{{camelCase name}}/useCases/delete{{pascalCase name}}/delete{{pascalCase name}}.ts",
    templateFile: "templates/domain/useCases/deleteDomain/deleteDomain.ts.hbs",
  },
  {
    type: "add",
    path: "../src/slices/{{camelCase name}}/useCases/delete{{pascalCase name}}/delete{{pascalCase name}}Factory.ts",
    templateFile: "templates/domain/useCases/deleteDomain/deleteDomainFactory.ts.hbs",
  },
  {
    type: "add",
    path: "../src/slices/{{camelCase name}}/useCases/delete{{pascalCase name}}/index.ts",
    templateFile: "templates/domain/useCases/deleteDomain/index.ts.hbs",
  },
  {
    type: "add",
    path: "../src/slices/{{camelCase name}}/useCases/load{{pascalCase name}}/load{{pascalCase name}}.ts",
    templateFile: "templates/domain/useCases/loadDomain/loadDomain.ts.hbs",
  },
  {
    type: "add",
    path: "../src/slices/{{camelCase name}}/useCases/load{{pascalCase name}}/load{{pascalCase name}}Factory.ts",
    templateFile: "templates/domain/useCases/loadDomain/loadDomainFactory.ts.hbs",
  },
  {
    type: "add",
    path: "../src/slices/{{camelCase name}}/useCases/load{{pascalCase name}}/index.ts",
    templateFile: "templates/domain/useCases/loadDomain/index.ts.hbs",
  },
  {
    type: "add",
    path: "../src/slices/{{camelCase name}}/useCases/update{{pascalCase name}}/update{{pascalCase name}}.ts",
    templateFile: "templates/domain/useCases/updateDomain/updateDomain.ts.hbs",
  },
  {
    type: "add",
    path: "../src/slices/{{camelCase name}}/useCases/update{{pascalCase name}}/update{{pascalCase name}}Factory.ts",
    templateFile: "templates/domain/useCases/updateDomain/updateDomainFactory.ts.hbs",
  },
  {
    type: "add",
    path: "../src/slices/{{camelCase name}}/useCases/update{{pascalCase name}}/index.ts",
    templateFile: "templates/domain/useCases/updateDomain/index.ts.hbs",
  },
  {
    type: "add",
    path: "../src/slices/{{camelCase name}}/useCases/load{{pascalCase name}}ByPage/load{{pascalCase name}}ByPage.ts",
    templateFile: "templates/domain/useCases/loadDomainByPage/loadDomainByPage.ts.hbs",
  },
  {
    type: "add",
    path: "../src/slices/{{camelCase name}}/useCases/load{{pascalCase name}}ByPage/load{{pascalCase name}}ByPageFactory.ts",
    templateFile:
      "templates/domain/useCases/loadDomainByPage/loadDomainByPageFactory.ts.hbs",
  },
  {
    type: "add",
    path: "../src/slices/{{camelCase name}}/useCases/load{{pascalCase name}}ByPage/index.ts",
    templateFile: "templates/domain/useCases/loadDomainByPage/index.ts.hbs",
  },
];
const repositories = [
  {
    type: "add",
    path: "../src/slices/{{camelCase name}}/repositories/index.ts",
    templateFile: "templates/domain/repositories/index.ts.hbs",
  },
  {
    type: "add",
    path: "../src/slices/{{camelCase name}}/repositories/contracts/index.ts",
    templateFile: "templates/domain/repositories/contracts/index.ts.hbs",
  },
  {
    type: "add",
    path: "../src/slices/{{camelCase name}}/{{pascalCase name}}Entity.ts",
    templateFile: "templates/domain/Domain.ts.hbs",
  },
  {
    type: "add",
    path: "../src/slices/{{camelCase name}}/repositories/{{pascalCase name}}Repository.ts",
    templateFile: "templates/domain/repositories/DomainRepository.ts.hbs",
  },
  {
    type: "add",
    path: "../src/slices/{{camelCase name}}/repositories/contracts/Add{{pascalCase name}}Repository.ts",
    templateFile: "templates/domain/repositories/contracts/AddDomainRepository.ts.hbs",
  },
  {
    type: "add",
    path: "../src/slices/{{camelCase name}}/repositories/contracts/Delete{{pascalCase name}}Repository.ts",
    templateFile: "templates/domain/repositories/contracts/DeleteDomainRepository.ts.hbs",
  },
  {
    type: "add",
    path: "../src/slices/{{camelCase name}}/repositories/contracts/Load{{pascalCase name}}Repository.ts",
    templateFile: "templates/domain/repositories/contracts/LoadDomainRepository.ts.hbs",
  },
  {
    type: "add",
    path: "../src/slices/{{camelCase name}}/repositories/contracts/Load{{pascalCase name}}ByPageRepository.ts",
    templateFile:
      "templates/domain/repositories/contracts/LoadDomainByPageRepository.ts.hbs",
  },
  {
    type: "add",
    path: "../src/slices/{{camelCase name}}/repositories/contracts/Update{{pascalCase name}}Repository.ts",
    templateFile: "templates/domain/repositories/contracts/UpdateDomainRepository.ts.hbs",
  },
];
