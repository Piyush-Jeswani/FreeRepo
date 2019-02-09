const retailOrgSharedCachePrimerTests = require('../../shared-specs/retail-org-cache-primer-shared.spec.js');
const orgData = require('../../data/cache-priming/metro-pcs/orgs.js');
const login = require('../../pages/login.js');
const nav = require('../../pages/components/nav-header.js');
const users = require('../../data/cache-priming/metro-pcs/users.js');

describe('Cache primer: week-view, indirect channel tag', () => {
  const sharedTestParams =
    ['week', // date range tested
      orgData.RetailCachedOrg.channelCategoryName, // primaryFilterCategory
      orgData.RetailCachedOrg.channelTagValues[1], // primaryFilterValue
      orgData.RetailCachedOrg.marketCategoryName, // secondaryFilterCategory
      orgData.RetailCachedOrg.indirectMarketTagValues // secondaryFilterArray
    ];
  beforeAll(done => {
    login.go();
    login.loginAsUser(users.defaultUser);
    done();
  });

  describe('when selected reporting period is "week"', () => {
    retailOrgSharedCachePrimerTests.retailOrgSharedCachePrimer(...sharedTestParams);
  });

  afterAll(() => {
    nav.logout();
  });
});
