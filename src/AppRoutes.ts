class Route {
  constructor(route: string, parent?: string) {
    let concatableParent = "";
    let concatableChild;

    if (parent !== undefined) {
      if (parent.endsWith("/")) {
        concatableParent = parent.substring(0, parent.length - 1);
        this._parent = parent;
      } else {
        concatableParent = parent;
        this._parent = parent + "/";
      }
    }

    if (route.startsWith("/")) {
      concatableChild = route.substring(1, route.length);
      this._route = concatableChild;
    } else {
      concatableChild = route;
      this._route = concatableChild;
    }
    this._absolute = concatableParent + "/" + concatableChild;
  }

  private _parent?: string;

  private _route: string;

  private _absolute: string;

  get parent() {
    return this._parent;
  }

  get route() {
    return this._route;
  }

  get absolute() {
    return this._absolute;
  }

  toString(): string {
    return this._absolute;
  }
}

const root = "/";
const userRoot = root + "user";
const adminRoot = root + "admin";
const loginRoot = root + "login";
const userManagerRoute = new Route("user-manager", adminRoot);
export const AppRoutes = {
  User: {
    Root: userRoot,
    Layout: new Route("/*", userRoot),
  },
  Admin: {
    Root: adminRoot,
    Layout: new Route("/*", adminRoot),
    UserManager: {
      Root: userManagerRoute,
      Layout: new Route("/*", userManagerRoute.absolute),
    },
  },
  Login: {
    Root: loginRoot,
    Layout: new Route("/*", loginRoot),
    Selector: new Route("selector", loginRoot),
    User: new Route("user", loginRoot),
    Admin: new Route("admin", loginRoot),
  },
};
