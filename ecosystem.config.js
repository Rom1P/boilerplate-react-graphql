module.exports = {
    apps: [{
        script: 'index.js',
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
            'post-deploy': 'npm ci --no-audit && npm run build',
            // 'post-deploy': 'npm ci --no-audit && cd ./server && npx sequelize db:migrate && cd ../ && npm run build && npm run daemon-start',
        }
    }
};
