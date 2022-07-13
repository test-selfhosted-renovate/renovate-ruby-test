module.exports = {
  branchPrefix: 'test-renovate/',
  autodiscover: false,
  username: 'renovate-release',
  gitAuthor: 'Renovate Bot <bot@renovateapp.com>',
  onboarding: true,
  platform: 'github',
  includeForks: true,
  repositories: [
    // 'SmirnovWorks/renovatebot-test',
    'test-selfhosted-renovate/renovate-ruby-test',
  ],
  packageRules: [
    {
      description: 'lockFileMaintenance',
      matchUpdateTypes: [
        'pin',
        'digest',
        'patch',
        'minor',
        'major',
        'lockFileMaintenance',
      ],
      dependencyDashboardApproval: false,
      stabilityDays: 0,
    },
  ],
};
