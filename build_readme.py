#  My thanks to Simon Willison for the inspiration (and much of the code)!
# https://github.com/simonw/
import datetime
import os
import pathlib
import re
from typing import List

root = pathlib.Path(__file__).parent.resolve()
base_url = "http://phil-barber.uk/"
num_posts = 5


def replace_chunk(content, marker, chunk):
    r = re.compile(
        r"<!\-\- {marker} start \-\->.*<!\-\- {marker} end \-\->".format(marker=marker),
        re.DOTALL,
    )
    chunk = f"<!-- {marker} start -->\n{chunk}\n<!-- {marker} end -->"
    return r.sub(chunk, content)


def filename(file):
    return os.path.basename(file).split(".")[0]


def file_title(file):
    name = filename(file)
    return " ".join(word.title() for word in name.split("-"))


def file_url(file):
    file_dir = os.path.dirname(file)
    post_type = file_dir.split("/")[-1]
    name = filename(os.path.basename(file).split(".")[0])
    return f"{base_url}{post_type}/{name}"


def file_updated(file):
    try:
        contents = open(file.path, "r", encoding="utf-8").read()
    except UnicodeDecodeError:
        contents = open(file.path, "r", encoding="us-ascii").read()

    r = re.compile(r".*dateCompleted: \"(.*?)\".*", re.DOTALL)
    date_string = r.match(contents).group(1)
    date = datetime.datetime.strptime(date_string, "%Y-%m-%d")
    return date.strftime("%d %b %Y")


def get_recent_posts() -> List[os.DirEntry]:
    dirs = ["books", "films"]
    files = [file for d in dirs for file in os.scandir(root / "src/pages" / d)]
    return sorted(files, key=os.path.getmtime, reverse=True)


if __name__ == "__main__":
    readme = root / "README.md"
    readme_contents = readme.open().read()

    recent_posts = get_recent_posts()[:num_posts]
    recent_posts_md = "\n".join(
        "* [{title}]({url}) - {updated}".format(
            title=file_title(file),
            url=file_url(file),
            updated=file_updated(file),
        )
        for file in recent_posts
    )
    rewritten = replace_chunk(readme_contents, "recent posts", recent_posts_md)

    readme.open("w").write(rewritten)
