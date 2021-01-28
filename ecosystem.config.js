module.exports = {
    apps: [{
        name: 'boilerplate-server',
        script: 'server/dist/index.js',
        watch: '.'
    }],

    deploy: {
        pi: {
            user: 'pi',
            host: 'pi.local',
            ref: 'origin/master',
            repo: 'https://github.com/Rom1P/boilerplate-react-graphql',
            path: '/var/www/pi',
            'pre-deploy': 'git pull && npm run clean',
            'post-deploy': 'npm ci --no-audit && npm run build && pm2 startOrRestart ecosystem.config.json',
        }
    }
};
