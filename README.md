git clone
docker should be installed in the machine
```bash
docker run --rm --interactive --tty -v $(pwd):/app composer install
```