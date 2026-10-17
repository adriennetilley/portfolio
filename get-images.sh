#!/bin/bash
# Downloads every image (and the CIVIC PDF) from your Squarespace site into this folder.
# Run it once from inside this folder:   bash get-images.sh
# Do this BEFORE you cancel Squarespace — the images stop existing when the site does.

cd "$(dirname "$0")" || exit 1
ok=0; failed=0

while IFS=$'\t' read -r url path; do
  [ -z "$url" ] && continue
  if [ -s "$path" ]; then ok=$((ok+1)); continue; fi   # already downloaded
  mkdir -p "$(dirname "$path")"
  if curl -fsSL --retry 2 -o "$path" "$url"; then
    ok=$((ok+1)); echo "✓ $path"
  else
    failed=$((failed+1)); rm -f "$path"; echo "✗ FAILED: $path"
  fi
done < image-list.tsv

echo
echo "Done: $ok downloaded, $failed failed."
[ "$failed" -gt 0 ] && echo "Just run the script again to retry the failed ones."
echo
echo "Two images aren't in this list (Squarespace hid their URLs). Save them by hand:"
echo "  1. The animated GIF at the top of your homepage  -> save as images/hero-comp-1_3.gif"
echo "  2. The UNICEF project image on your homepage     -> save as images/unicef-child-violence.png"
echo "  (Right-click each one on adrienne.fyi > Save Image As…)"
