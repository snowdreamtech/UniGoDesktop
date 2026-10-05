// Copyright (c) 2026 SnowdreamTech. All rights reserved.
// Licensed under the MIT License. See LICENSE file in the project root for full license information.

//go:build !windows && !darwin

package sysinfo

import (
	"os/exec"
	"strings"
)

// IsSystemDarkTheme returns true if Linux desktop environment is configured in Dark Mode.
func IsSystemDarkTheme() bool {
	cmd := exec.Command("gsettings", "get", "org.gnome.desktop.interface", "color-scheme")
	out, err := cmd.Output()
	if err == nil && strings.Contains(string(out), "dark") {
		return true
	}
	return false
}

// SupportsMicaBackdrop always returns false on Linux.
func SupportsMicaBackdrop() bool {
	return false
}

// SyncTitleBarTheme is a no-op on Linux as window decorations are managed by the window manager/GTK.
func SyncTitleBarTheme(theme string) {
}
