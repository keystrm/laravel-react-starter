git clone
docker should be installed in the machine

```bash
docker run --rm --interactive --tty -v $(pwd):/app composer install
```
```bash
sail up
```

config ports in env

```
APP_PORT=8080
VITE_PORT=5173
FORWARD_DB_PORT=3307
FORWARD_REDIS_PORT=6379
API_BASE_URL=https://api.example.com
```

generate secret-key

```
sail artisan key:generate
sail artisan optimize
```

make development environment

```
npm run dev
```

