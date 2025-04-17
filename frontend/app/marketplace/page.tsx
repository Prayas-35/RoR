import Image from "next/image"
import {
    Search,
    ShoppingBag,
    FileText,
    Plus,
    ChevronRight,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/Navbar"

export default function NFTMarketplace() {
    return (
        <>
            <Navbar />
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 opacity-30 bg-[url('/fog3.png?height=1080&width=1920')] bg-cover"></div>
                <div className="absolute inset-0 bg-gradient-radial from-transparent to-[#000000] opacity-80"></div>
            </div>
            <div className="flex h-[calc(100vh-80px)] mt-20">
                {/* Sidebar */}
                <div className="hidden md:flex w-64 flex-col border-r border-[#1a1d25] p-4">
                    <div className="flex items-center gap-2 mb-8 ps-5">
                        <span className="text-teal-100 font-bold text-xl text-center">Atrium Mercurii</span>
                    </div>

                    <nav className="space-y-1 flex-1">
                        <a href="#" className="flex items-center gap-3 text-teal-100 p-3 rounded-md hover:bg-[#1a1d25]">
                            <ShoppingBag size={20} />
                            <span>Marketplace</span>
                        </a>
                        <a href="#" className="flex items-center gap-3 text-gray-400 p-3 rounded-md hover:bg-[#1a1d25]">
                            <Plus size={20} />
                            <span>List New NFT</span>
                        </a>
                        <a href="#" className="flex items-center gap-3 text-gray-400 p-3 rounded-md hover:bg-[#1a1d25]">
                            <FileText size={20} />
                            <span>My Listings</span>
                        </a>
                    </nav>
                </div>

                {/* Main Content */}
                <div className="flex-1 overflow-auto">
                    {/* Search Bar */}
                    <div className="p-4 sticky top-0 bg-[#0a0c10] z-10">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                            <input
                                type="text"
                                placeholder="Search items, collections, accounts"
                                className="w-full bg-[#1a1d25] border-none rounded-md py-2 pl-10 pr-4 text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0e84e8]"
                            />
                        </div>
                    </div>

                    {/* Hero Section */}
                    <div className="relative px-4 py-6">
                        <div className="bg-gradient-to-r from-[#0a1a2e]/60 to-[#0e1015]/60 rounded-xl overflow-hidden">
                            <div className="flex flex-col md:flex-row items-center p-6 md:p-8">
                                <div className="md:w-1/2 mb-6 md:mb-0">
                                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                        Discover, Collect & <br />
                                        Create your own NFT
                                    </h1>
                                    <p className="text-gray-400 mb-6">Explore the best digital assets from top creators around the world</p>
                                    <div className="flex flex-wrap gap-3">
                                        <Button className="bg-teal-700 hover:bg-teal-600 hover:shadow-glow animate-pulse-slow text-teal-100 tracking-wider transition-all duration-300 hover:scale-102">Discover Now</Button>
                                    </div>
                                </div>
                                <div className="md:w-1/2 relative">
                                    <Image
                                        src="/placeholder.svg?height=400&width=400"
                                        alt="Person with VR headset"
                                        width={400}
                                        height={400}
                                        className="object-cover"
                                    />

                                    {/* Featured NFTs */}
                                    <div className="absolute -bottom-16 left-0 right-0 flex justify-center gap-4">
                                        <div className="w-20 h-20 rounded-lg overflow-hidden border-2 border-[#0e84e8] shadow-lg">
                                            <Image
                                                src="/placeholder.svg?height=80&width=80"
                                                alt="Featured NFT 1"
                                                width={80}
                                                height={80}
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="w-20 h-20 rounded-lg overflow-hidden border-2 border-[#0e84e8] shadow-lg">
                                            <Image
                                                src="/placeholder.svg?height=80&width=80"
                                                alt="Featured NFT 2"
                                                width={80}
                                                height={80}
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="w-20 h-20 rounded-lg overflow-hidden border-2 border-[#0e84e8] shadow-lg">
                                            <Image
                                                src="/placeholder.svg?height=80&width=80"
                                                alt="Featured NFT 3"
                                                width={80}
                                                height={80}
                                                className="object-cover"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* NFT Categories */}
                    <div className="px-4 pt-20 pb-6">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-2xl font-bold text-white">All NFTs</h2>
                            <Badge variant="outline" className="text-gray-400 border-[#1a1d25]">
                                2,345 items
                            </Badge>
                        </div>

                        <main className="mt-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {/* NFT Card 1 */}
                                <div className="bg-[#1a1d25] rounded-xl overflow-hidden">
                                    <div className="relative">
                                        <Image
                                            src="/placeholder.svg?height=300&width=400"
                                            alt="NFT 1"
                                            width={400}
                                            height={300}
                                            className="w-full h-64 object-cover"
                                        />
                                    </div>
                                    <div className="p-4">
                                        <div className="flex justify-between items-start mb-2">
                                            <h3 className="text-white font-semibold">The Future Wave #23</h3>
                                            <div className="w-6 h-6 rounded-full overflow-hidden">
                                                <Image
                                                    src="/placeholder.svg?height=24&width=24"
                                                    alt="Creator"
                                                    width={24}
                                                    height={24}
                                                    className="object-cover"
                                                />
                                            </div>
                                        </div>
                                        <p className="text-xs text-gray-400 mb-3">@futureartist</p>
                                        <div className="flex justify-between items-center">
                                            <div>
                                                <p className="text-xs text-gray-400">Current Bid</p>
                                                <p className="text-white font-semibold">0.24 ETH</p>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-xs text-gray-400">Ending In</p>
                                                <p className="text-white font-semibold">12h 14m 8s</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* NFT Card 2 */}
                                <div className="bg-[#1a1d25] rounded-xl overflow-hidden">
                                    <div className="relative">
                                        <Image
                                            src="/placeholder.svg?height=300&width=400"
                                            alt="NFT 2"
                                            width={400}
                                            height={300}
                                            className="w-full h-64 object-cover"
                                        />
                                    </div>
                                    <div className="p-4">
                                        <div className="flex justify-between items-start mb-2">
                                            <h3 className="text-white font-semibold">Astro World #244</h3>
                                            <div className="w-6 h-6 rounded-full overflow-hidden">
                                                <Image
                                                    src="/placeholder.svg?height=24&width=24"
                                                    alt="Creator"
                                                    width={24}
                                                    height={24}
                                                    className="object-cover"
                                                />
                                            </div>
                                        </div>
                                        <p className="text-xs text-gray-400 mb-3">@cosmicdesigner</p>
                                        <div className="flex justify-between items-center">
                                            <div>
                                                <p className="text-xs text-gray-400">Current Bid</p>
                                                <p className="text-white font-semibold">0.34 ETH</p>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-xs text-gray-400">Ending In</p>
                                                <p className="text-white font-semibold">6h 8m 20s</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* NFT Card 3 */}
                                <div className="bg-[#1a1d25] rounded-xl overflow-hidden">
                                    <div className="relative">
                                        <Image
                                            src="/placeholder.svg?height=300&width=400"
                                            alt="NFT 3"
                                            width={400}
                                            height={300}
                                            className="w-full h-64 object-cover"
                                        />
                                    </div>
                                    <div className="p-4">
                                        <div className="flex justify-between items-start mb-2">
                                            <h3 className="text-white font-semibold">Cyber Art #24</h3>
                                            <div className="w-6 h-6 rounded-full overflow-hidden">
                                                <Image
                                                    src="/placeholder.svg?height=24&width=24"
                                                    alt="Creator"
                                                    width={24}
                                                    height={24}
                                                    className="object-cover"
                                                />
                                            </div>
                                        </div>
                                        <p className="text-xs text-gray-400 mb-3">@cyberartist</p>
                                        <div className="flex justify-between items-center">
                                            <div>
                                                <p className="text-xs text-gray-400">Current Bid</p>
                                                <p className="text-white font-semibold">0.54 ETH</p>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-xs text-gray-400">Ending In</p>
                                                <p className="text-white font-semibold">7h 03m 20s</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 text-center">
                                <Button variant="outline" className="border-[#1a1d25] text-white hover:bg-[#1a1d25]">
                                    Load More <ChevronRight size={16} className="ml-2" />
                                </Button>
                            </div>
                        </main>
                        {/* </Tabs> */}
                    </div>
                </div>
            </div>
        </>
    )
}
