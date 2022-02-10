const basePaths = {
  home: 'home',
  employee: 'employee',
};

const routesNames = {
  home: '',
  error404: '404',
  employee: {
    all: 'all',
    detail: ':id',
  },
};

export const getEmployeeDetail = (id: string) => `/${basePaths.employee}/${id}`;

export const RoutesConfig = {
  basePaths,
  routesNames,
  routes: {
    home: `/${routesNames.home}`,
    error404: `/${routesNames.error404}`,
    employee: {
      all: `/${basePaths.employee}/${routesNames.employee.all}`,
      detail: getEmployeeDetail,
    },
  },
};
