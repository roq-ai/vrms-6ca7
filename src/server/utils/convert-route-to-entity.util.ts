const mapping: Record<string, string> = {
  clients: 'client',
  pentesters: 'pentester',
  users: 'user',
  vulnerabilities: 'vulnerability',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
