const visitorBehaviorSharedTestsMonday = require('../../shared-specs/visitor-behavior-shared-Monday.spec.js');
const login = require('../../pages/login.js');
const nav = require('../../pages/components/nav-header.js');
const tabNav = require('../../pages/components/tab-nav.js');
const dateSelector = require('../../pages/components/time-period-picker.js');

describe('Visitor behavior tab - Monday calendar:', () => {
  beforeAll(() => {
    login.go();
    login.loginAsMondayUser();
    nav.pickSSOrg();
    tabNav.navToVisitorBehaviorTab();
    dateSelector.clickMonthButton();
  });

  describe('when selected reporting period is "month"', () => {
    visitorBehaviorSharedTestsMonday.visitorBehaviorSharedTestsMonday('month');
  });

  afterAll(() => {
    nav.logout();
  });
});
