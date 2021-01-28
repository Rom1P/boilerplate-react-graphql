module.exports = {
    apps: [{
        script: 'index.js',
        watch: '.'
    }],

    deploy: {
        pi: {
            user: 'pi',
            host: '192.168.1.16',
            ref: 'origin/master',
            repo: 'https://github.com/Rom1P/boilerplate-react-graphql',
            path: '/var/www/pi',
            'pre-deploy': 'npm run clean && git pull',
            'post-deploy': 'npm ci --no-audit && npm run build',
            // 'post-deploy': 'npm ci --no-audit && cd ./server && npx sequelize db:migrate && cd ../ && npm run build && npm run daemon-start',
        }
    }
};