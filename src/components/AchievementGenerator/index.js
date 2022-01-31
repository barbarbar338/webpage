import { Component } from "react";
import Header from "./Header";
import { toast } from "react-toastify";
import CONFIG from "../../config";

export default class GeneratorSection extends Component {
    state = {
        title: "",
        content: "",
        item: "egg",
        backgroundURL: "",
    };
    handleAchievementContent = (e) => {
        this.setState({
            content: e.target.value,
        });
    };
    handleAchievementTitle = (e) => {
        this.setState({
            title: e.target.value,
        });
    };
    handleItemInput = (e) => {
        this.setState({
            item: e.target.value,
        });
    };
    handleCreateButton = () => {
        if (this.state.title.length < 3)
            return this.createErrorToast(
                "⛔ Title must be longer than or equal to 3 characters...",
            );
        if (this.state.title.length > 28)
            return this.createErrorToast(
                "⛔ Title must be shorter than or equal to 28 characters...",
            );
        if (this.state.content.length < 3)
            return this.createErrorToast(
                "⛔ Content must be longer than or equal to 3 characters...",
            );
        if (this.state.content.length > 28)
            return this.createErrorToast(
                "⛔ Content must be shorter than or equal to 28 characters...",
            );
        this.setState({
            backgroundURL: `${CONFIG.PINKIE_API}/canvas/mcachievement?icon=${
                this.state.item
            }&title=${encodeURIComponent(
                this.state.title,
            )}&content=${encodeURIComponent(this.state.content)}`,
        });
    };
    createErrorToast(content) {
        return toast.error(content, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }
    render() {
        return (
            <section className="blog-page">
                <div className="container">
                    <Header />
                    <div className="row mt-100 mb-50 mob-mt">
                        <div className="col-lg-5 col-sm-6">
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <label
                                        className="input-group-text"
                                        htmlFor="item"
                                    >
                                        Item
                                    </label>
                                </div>
                                <select
                                    className="custom-select"
                                    id="item"
                                    onChange={this.handleItemInput}
                                >
                                    <option value="egg">Egg</option>
                                    <option value="book">Book</option>
                                    <option value="apple">Apple</option>
                                    <option value="arrow">Arrow</option>
                                    <option value="bed">Bed</option>
                                    <option value="bedrock">Bedrock</option>
                                    <option value="blaze_powder">
                                        Blaze Powder
                                    </option>
                                    <option value="blaze_rod">Blaze Rod</option>
                                    <option value="block_of_diamond">
                                        Block Of Diamond
                                    </option>
                                    <option value="block_of_gold">
                                        Block Of Gold
                                    </option>
                                    <option value="block_of_iron">
                                        Block Of Iron
                                    </option>
                                    <option value="boat">Boat</option>
                                    <option value="bone">Bone</option>
                                    <option value="bonemeal">Bonemeal</option>
                                    <option value="bottle_of_enchanting">
                                        Bottle Of Enchanting
                                    </option>
                                    <option value="bottle">Bottle</option>
                                    <option value="bow">Bow</option>
                                    <option value="bowl">Bowl</option>
                                    <option value="bread">Bread</option>
                                    <option value="brewing_stand">
                                        Brewing Stand
                                    </option>
                                    <option value="bucket">Bucket</option>
                                    <option value="cake">Cake</option>
                                    <option value="chainmail_boots">
                                        Chainmail Boots
                                    </option>
                                    <option value="chainmail_chestplate">
                                        Chainmail Chestplate
                                    </option>
                                    <option value="chainmail_helmet">
                                        Chainmail Helmet
                                    </option>
                                    <option value="chainmail_leggings">
                                        Chainmail Leggings
                                    </option>
                                    <option value="charcoal">Charcoal</option>
                                    <option value="chest">Chest</option>
                                    <option value="coal_ore">Coal Ore</option>
                                    <option value="coal">Coal</option>
                                    <option value="cobblesonte">
                                        Cobblesonte
                                    </option>
                                    <option value="compass">Compass</option>
                                    <option value="cooked_chicken">
                                        Cooked Chicken
                                    </option>
                                    <option value="cooked_fish">
                                        Cooked Fish
                                    </option>
                                    <option value="cooked_porkchop">
                                        Cooked Porkchop
                                    </option>
                                    <option value="cookie">Cookie</option>
                                    <option value="diamond_axe">
                                        Diamond Axe
                                    </option>
                                    <option value="diamond_boots">
                                        Diamond Boots
                                    </option>
                                    <option value="diamond_chestplate">
                                        Diamond Chestplate
                                    </option>
                                    <option value="diamond_helmet">
                                        Diamond Helmet
                                    </option>
                                    <option value="diamond_hoe">
                                        Diamond Hoe
                                    </option>
                                    <option value="diamond_leggings">
                                        Diamond Leggings
                                    </option>
                                    <option value="diamond_ore">
                                        Diamond Ore
                                    </option>
                                    <option value="diamond_pickaxe">
                                        Diamond Pickaxe
                                    </option>
                                    <option value="diamond_shovel">
                                        Diamond Shovel
                                    </option>
                                    <option value="diamond_sword">
                                        Diamond Sword
                                    </option>
                                    <option value="diamond">Diamond</option>
                                    <option value="dirt">Dirt</option>
                                    <option value="dragon_egg">
                                        Dragon Egg
                                    </option>
                                    <option value="egg">Egg</option>
                                    <option value="enchantment_table">
                                        Enchantment Table
                                    </option>
                                    <option value="ender_pearl">
                                        Ender Pearl
                                    </option>
                                    <option value="eye_of_ender">
                                        Eye Of Ender
                                    </option>
                                    <option value="feather">Feather</option>
                                    <option value="fence_gate">
                                        Fence Gate
                                    </option>
                                    <option value="fence">Fence</option>
                                    <option value="flint_and_steel">
                                        Flint And Steel
                                    </option>
                                    <option value="flint">Flint</option>
                                    <option value="furnance">Furnance</option>
                                    <option value="glowstone_dust">
                                        Glowstone Dust
                                    </option>
                                    <option value="gold_apple">
                                        Gold Apple
                                    </option>
                                    <option value="gold_axe">Gold Axe</option>
                                    <option value="gold_boots">
                                        Gold Boots
                                    </option>
                                    <option value="gold_chestplate">
                                        Gold Chestplate
                                    </option>
                                    <option value="gold_helmet">
                                        Gold Helmet
                                    </option>
                                    <option value="gold_hoe">Gold Hoe</option>
                                    <option value="gold_ingot">
                                        Gold Ingot
                                    </option>
                                    <option value="gold_leggings">
                                        Gold Leggings
                                    </option>
                                    <option value="gold_nugget">
                                        Gold Nugget
                                    </option>
                                    <option value="gold_ore">Gold Ore</option>
                                    <option value="gold_pickaxe">
                                        Gold Pickaxe
                                    </option>
                                    <option value="gold_shovel">
                                        Gold Shovel
                                    </option>
                                    <option value="gold_sword">
                                        Gold Sword
                                    </option>
                                    <option value="grass">Grass</option>
                                    <option value="iron_axe">Iron Axe</option>
                                    <option value="iron_boots">
                                        Iron Boots
                                    </option>
                                    <option value="iron_chestplate">
                                        Iron Chestplate
                                    </option>
                                    <option value="iron_helmet">
                                        Iron Helmet
                                    </option>
                                    <option value="iron_hoe">Iron Hoe</option>
                                    <option value="iron_ingot">
                                        Iron Ingot
                                    </option>
                                    <option value="iron_leggings">
                                        Iron Leggings
                                    </option>
                                    <option value="iron_ore">Iron Ore</option>
                                    <option value="iron_pickaxe">
                                        Iron Pickaxe
                                    </option>
                                    <option value="iron_shovel">
                                        Iron Shovel
                                    </option>
                                    <option value="iron_sword">
                                        Iron Sword
                                    </option>
                                    <option value="ladder">Ladder</option>
                                    <option value="lapis_lazuli">
                                        Lapis Lazuli
                                    </option>
                                    <option value="lava_bucket">
                                        Lava Bucket
                                    </option>
                                    <option value="leather">Leather</option>
                                    <option value="leather_boots">
                                        Leather Boots
                                    </option>
                                    <option value="leather_chestplate">
                                        Leather Chestplate
                                    </option>
                                    <option value="leather_helmet">
                                        Leather Helmet
                                    </option>
                                    <option value="leather_leggings">
                                        Leather Leggings
                                    </option>
                                    <option value="map">Map</option>
                                    <option value="melon_slice">
                                        Melon Slice
                                    </option>
                                    <option value="milk_bucket">
                                        Milk Bucket
                                    </option>
                                    <option value="minecart">Minecart</option>
                                    <option value="music_disk">
                                        Music Disk
                                    </option>
                                    <option value="obdisian">Obdisian</option>
                                    <option value="paper">Paper</option>
                                    <option value="piston">Piston</option>
                                    <option value="potion">Potion</option>
                                    <option value="pumpkin">Pumpkin</option>
                                    <option value="rails">Rails</option>
                                    <option value="raw_beef">Raw Beef</option>
                                    <option value="raw_chicken">
                                        Raw Chicken
                                    </option>
                                    <option value="raw_fish">Raw Fish</option>
                                    <option value="raw_porkchop">
                                        Raw Porkchop
                                    </option>
                                    <option value="redstone_dust">
                                        Redstone Dust
                                    </option>
                                    <option value="redstone_ore">
                                        Redstone Ore
                                    </option>
                                    <option value="redstone_repeater">
                                        Redstone Repeater
                                    </option>
                                    <option value="redstone_torch">
                                        Redstone Torch
                                    </option>
                                    <option value="redstone_wire">
                                        Redstone Wire
                                    </option>
                                    <option value="rotten_beef">
                                        Rotten Beef
                                    </option>
                                    <option value="saddle">Saddle</option>
                                    <option value="shears">Shears</option>
                                    <option value="sign">Sign</option>
                                    <option value="slimeball">Slimeball</option>
                                    <option value="snowball">Snowball</option>
                                    <option value="splash_potion">
                                        Splash Potion
                                    </option>
                                    <option value="steak">Steak</option>
                                    <option value="stick">Stick</option>
                                    <option value="sticky_piston">
                                        Sticky Piston
                                    </option>
                                    <option value="stone">Stone</option>
                                    <option value="stone_axe">Stone Axe</option>
                                    <option value="stone_button">
                                        Stone Button
                                    </option>
                                    <option value="stone_hoe">Stone Hoe</option>
                                    <option value="stone_pickaxe">
                                        Stone Pickaxe
                                    </option>
                                    <option value="stone_pressure_plate">
                                        Stone Pressure Plate
                                    </option>
                                    <option value="stone_shovel">
                                        Stone Shovel
                                    </option>
                                    <option value="stone_sword">
                                        Stone Sword
                                    </option>
                                    <option value="string">String</option>
                                    <option value="water_bottle">
                                        Water Bottle
                                    </option>
                                    <option value="water_bucket">
                                        Water Bucket
                                    </option>
                                </select>
                            </div>
                            <div className="input-group mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Achievement Title"
                                    onChange={this.handleAchievementTitle}
                                />
                            </div>
                            <div className="input-group mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Achievement Content"
                                    onChange={this.handleAchievementContent}
                                />
                                <div className="input-group-append">
                                    <button
                                        className="btn btn-outline-secondary"
                                        type="button"
                                        onClick={this.handleCreateButton}
                                    >
                                        Create
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-sm-6">
                            <div className="achievement-box">
                                {this.state.backgroundURL ? (
                                    <img
                                        alt="AchievementGenerator"
                                        src={this.state.backgroundURL}
                                    />
                                ) : (
                                    ""
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
