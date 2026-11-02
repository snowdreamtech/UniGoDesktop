export namespace config {

	export class AppConfig {
	    debug: boolean;
	    autoCheckUpdate: boolean;
	    theme: string;
	    language: string;
	    enableTray: boolean;
	    closeAction: string;
	    githubProxy: string;
	    proxyProtocol: string;
	    proxyHost: string;
	    proxyPort: number;
	    proxyUser: string;
	    proxyPassword: string;

	    static createFrom(source: any = {}) {
	        return new AppConfig(source);
	    }

	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.debug = source["debug"];
	        this.autoCheckUpdate = source["autoCheckUpdate"];
	        this.theme = source["theme"];
	        this.language = source["language"];
	        this.enableTray = source["enableTray"];
	        this.closeAction = source["closeAction"];
	        this.githubProxy = source["githubProxy"];
	        this.proxyProtocol = source["proxyProtocol"];
	        this.proxyHost = source["proxyHost"];
	        this.proxyPort = source["proxyPort"];
	        this.proxyUser = source["proxyUser"];
	        this.proxyPassword = source["proxyPassword"];
	    }
	}
	export class ConfigHealth {
	    ConfigPath: string;
	    Exists: boolean;
	    Valid: boolean;
	    HasBackup: boolean;
	    Issue: string;

	    static createFrom(source: any = {}) {
	        return new ConfigHealth(source);
	    }

	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.ConfigPath = source["ConfigPath"];
	        this.Exists = source["Exists"];
	        this.Valid = source["Valid"];
	        this.HasBackup = source["HasBackup"];
	        this.Issue = source["Issue"];
	    }
	}

}

export namespace disk {

	export class DiskInfo {
	    device: string;
	    name: string;
	    size: number;
	    formatted: string;
	    freeSpace: number;
	    freeFormatted: string;
	    isRemovable: boolean;
	    isSystem: boolean;
	    usbVersion: string;
	    usbSpeed: string;
	    vendor: string;
	    fileSystem: string;
	    partitionScheme: string;
	    writable: boolean;
	    serialNumber: string;
	    vendorId: string;
	    productId: string;
	    smartStatus: string;
	    busPower: string;
	    busPowerUsed: string;
	    sectorSize: string;
	    transportProtocol: string;
	    controllerVendor: string;
	    isFakeUsb3: boolean;
	    protocolCode: string;
	    mountPoint: string;

	    static createFrom(source: any = {}) {
	        return new DiskInfo(source);
	    }

	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.device = source["device"];
	        this.name = source["name"];
	        this.size = source["size"];
	        this.formatted = source["formatted"];
	        this.freeSpace = source["freeSpace"];
	        this.freeFormatted = source["freeFormatted"];
	        this.isRemovable = source["isRemovable"];
	        this.isSystem = source["isSystem"];
	        this.usbVersion = source["usbVersion"];
	        this.usbSpeed = source["usbSpeed"];
	        this.vendor = source["vendor"];
	        this.fileSystem = source["fileSystem"];
	        this.partitionScheme = source["partitionScheme"];
	        this.writable = source["writable"];
	        this.serialNumber = source["serialNumber"];
	        this.vendorId = source["vendorId"];
	        this.productId = source["productId"];
	        this.smartStatus = source["smartStatus"];
	        this.busPower = source["busPower"];
	        this.busPowerUsed = source["busPowerUsed"];
	        this.sectorSize = source["sectorSize"];
	        this.transportProtocol = source["transportProtocol"];
	        this.controllerVendor = source["controllerVendor"];
	        this.isFakeUsb3 = source["isFakeUsb3"];
	        this.protocolCode = source["protocolCode"];
	        this.mountPoint = source["mountPoint"];
	    }
	}

}

export namespace hypervisor {

	export class VMConfig {
	    cpuCores: number;
	    memoryMB: number;
	    bootMode: string;
	    displayAccel: boolean;
	    secureBoot: boolean;

	    static createFrom(source: any = {}) {
	        return new VMConfig(source);
	    }

	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.cpuCores = source["cpuCores"];
	        this.memoryMB = source["memoryMB"];
	        this.bootMode = source["bootMode"];
	        this.displayAccel = source["displayAccel"];
	        this.secureBoot = source["secureBoot"];
	    }
	}
	export class VMStatus {
	    type: string;
	    name: string;
	    installed: boolean;
	    path: string;
	    version: string;
	    priority: number;
	    canBootRaw: boolean;

	    static createFrom(source: any = {}) {
	        return new VMStatus(source);
	    }

	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.type = source["type"];
	        this.name = source["name"];
	        this.installed = source["installed"];
	        this.path = source["path"];
	        this.version = source["version"];
	        this.priority = source["priority"];
	        this.canBootRaw = source["canBootRaw"];
	    }
	}

}

export namespace logger {

	export class LogEntry {
	    id: number;
	    // Go type: time
	    timestamp: any;
	    level: string;
	    message: string;
	    details?: string;

	    static createFrom(source: any = {}) {
	        return new LogEntry(source);
	    }

	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.id = source["id"];
	        this.timestamp = this.convertValues(source["timestamp"], null);
	        this.level = source["level"];
	        this.message = source["message"];
	        this.details = source["details"];
	    }

		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}

}

export namespace main {

	export class HelloInfo {
	    greeting: string;
	    os: string;
	    arch: string;
	    timestamp: string;

	    static createFrom(source: any = {}) {
	        return new HelloInfo(source);
	    }

	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.greeting = source["greeting"];
	        this.os = source["os"];
	        this.arch = source["arch"];
	        this.timestamp = source["timestamp"];
	    }
	}
	export class NetworkTestResult {
	    connected: boolean;
	    latencyMs: number;
	    targetUrl: string;
	    error?: string;

	    static createFrom(source: any = {}) {
	        return new NetworkTestResult(source);
	    }

	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.connected = source["connected"];
	        this.latencyMs = source["latencyMs"];
	        this.targetUrl = source["targetUrl"];
	        this.error = source["error"];
	    }
	}
	export class SystemInfo {
	    os: string;
	    arch: string;
	    goVersion: string;
	    appName: string;
	    version: string;
	    commit: string;
	    buildTime: string;
	    dataDir: string;
	    configDir: string;

	    static createFrom(source: any = {}) {
	        return new SystemInfo(source);
	    }

	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.os = source["os"];
	        this.arch = source["arch"];
	        this.goVersion = source["goVersion"];
	        this.appName = source["appName"];
	        this.version = source["version"];
	        this.commit = source["commit"];
	        this.buildTime = source["buildTime"];
	        this.dataDir = source["dataDir"];
	        this.configDir = source["configDir"];
	    }
	}

}

export namespace updater {

	export class GuiUpdateResult {
	    success: boolean;
	    message?: string;

	    static createFrom(source: any = {}) {
	        return new GuiUpdateResult(source);
	    }

	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.success = source["success"];
	        this.message = source["message"];
	    }
	}
	export class UpdateStatus {
	    hasUpdate: boolean;
	    currentTag: string;
	    latestTag: string;
	    downloadUrl: string;

	    static createFrom(source: any = {}) {
	        return new UpdateStatus(source);
	    }

	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.hasUpdate = source["hasUpdate"];
	        this.currentTag = source["currentTag"];
	        this.latestTag = source["latestTag"];
	        this.downloadUrl = source["downloadUrl"];
	    }
	}

}

export namespace utils {

	export class ChecksumResult {
	    filePath: string;
	    algorithm: string;
	    hash: string;
	    fileSize: number;
	    durationMs: number;

	    static createFrom(source: any = {}) {
	        return new ChecksumResult(source);
	    }

	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.filePath = source["filePath"];
	        this.algorithm = source["algorithm"];
	        this.hash = source["hash"];
	        this.fileSize = source["fileSize"];
	        this.durationMs = source["durationMs"];
	    }
	}

}
