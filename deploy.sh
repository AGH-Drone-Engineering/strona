#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")"

echo "1. Budowanie Tailwind CSS..."
npm run build

echo "2. Wgrywanie zawartości dist/ na drone@web.agh.edu.pl (public_html/new-website-production/)..."
sftp -o StrictHostKeyChecking=no drone@web.agh.edu.pl << 'EOF'
lcd dist
put index.html public_html/new-website-production/index.html
put about.html public_html/new-website-production/about.html
put output.css public_html/new-website-production/output.css
put translations.js public_html/new-website-production/translations.js
put i18n.js public_html/new-website-production/i18n.js
put mobile.js public_html/new-website-production/mobile.js
put aghde.vcf public_html/new-website-production/aghde.vcf
put images/logo.png public_html/new-website-production/images/logo.png
put images/favicons/favicon.png public_html/new-website-production/images/favicons/favicon.png
bye
EOF

echo "Gotowe! Strona zaktualizowana pod https://drone.agh.edu.pl/"
