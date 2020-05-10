# taken from startlxqt

contains()
{
    local str="$1" substr="$2"
    [ "$str" = "$substr" -o -z "${str##$substr:*}" -o -z "${str##*:$substr:*}" -o -z "${str%%*:$substr}" ]
}

if [ -z "$XDG_DATA_HOME" ]; then
    export XDG_DATA_HOME="$HOME/.local/share"
fi

if [ -z "$XDG_CONFIG_HOME" ]; then
    export XDG_CONFIG_HOME="$HOME/.config"
fi

export ZDOTDIR=$XDG_CONFIG_HOME/zsh
[ -z $ZDOTDIR ] && mkdir $ZDOTDIR

if [ -z "$XDG_DATA_DIRS" ]; then
    XDG_DATA_DIRS="$XDG_DATA_HOME:/usr/local/share:/usr/share"
else
    if ! contains "$XDG_DATA_DIRS" "/usr/share"; then
        XDG_DATA_DIRS="$XDG_DATA_DIRS:/usr/share"
    fi
fi
export XDG_DATA_DIRS

if [ -z "$XDG_CONFIG_DIRS" ]; then
    export XDG_CONFIG_DIRS="/etc:/etc/xdg:/usr/share"
else
    if ! contains "$XDG_CONFIG_DIRS" '/etc/xdg'; then
        XDG_CONFIG_DIRS="$XDG_CONFIG_DIRS:/etc/xdg"
    fi
fi

if [ -z "$XDG_CACHE_HOME" ]; then
    export XDG_CACHE_HOME="$HOME/.cache"
fi
