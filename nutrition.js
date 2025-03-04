const nutritionalPlans = {
    volleyball: `
        <h3 class="nutritional-title">Nutritional Plan for a Volleyball Player</h3>
        <table class="table">
            <tr>
                <th>Daily Caloric Intake</th>
                <td>3,000 - 4,000 kcal per day</td>
            </tr>
            <tr>
                <th>Macronutrient Distribution</th>
                <td>
                    <ul>
                        <li>Carbohydrates: 55-65%</li>
                        <li>Proteins: 15-20%</li>
                        <li>Fats: 20-30%</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <th>Meal Plan</th>
                <td>
                    <ul>
                        <li>Breakfast: Oatmeal with banana and almonds, scrambled eggs, Greek yogurt.</li>
                        <li>Mid-Morning Snack: Energy bar, fruit.</li>
                        <li>Lunch: Grilled chicken with quinoa and broccoli.</li>
                        <li>Afternoon Snack: Whole grain wrap with turkey and nut mix.</li>
                        <li>Pre-Training Snack: Banana or small smoothie.</li>
                        <li>Dinner: Baked salmon with sweet potatoes and asparagus.</li>
                        <li>Evening Snack: Cottage cheese with pineapple.</li>
                    </ul>
                </td>
            </tr>
        </table>
    `,
    badminton: `
        <h3 class="nutritional-title">Nutritional Plan for a Badminton Player</h3>
        <table class="table">
            <tr>
                <th>Daily Caloric Intake</th>
                <td>2,500 - 3,500 kcal per day</td>
            </tr>
            <tr>
                <th>Macronutrient Distribution</th>
                <td>
                    <ul>
                        <li>Carbohydrates: 50-60%</li>
                        <li>Proteins: 20-25%</li>
                        <li>Fats: 20-30%</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <th>Meal Plan</th>
                <td>
                    <ul>
                        <li>Breakfast: Smoothie bowl with granola and berries.</li>
                        <li>Mid-Morning Snack: Rice cakes with cottage cheese, fruit.</li>
                        <li>Lunch: Grilled chicken with brown rice and mixed vegetables.</li>
                        <li>Afternoon Snack: Hummus with veggie sticks.</li>
                        <li>Pre-Training Snack: Fruit smoothie.</li>
                        <li>Dinner: Stir-fried tofu with quinoa and broccoli.</li>
                        <li>Evening Snack: Greek yogurt with cinnamon.</li>
                    </ul>
                </td>
            </tr>
        </table>
    `,
    swimming: `
        <h3 class="nutritional-title">Nutritional Plan for a Swimmer</h3>
        <table class="table">
            <tr>
                <th>Daily Caloric Intake</th>
                <td>4,000 - 6,000 kcal per day</td>
            </tr>
            <tr>
                <th>Macronutrient Distribution</th>
                <td>
                    <ul>
                        <li>Carbohydrates: 60-70%</li>
                        <li>Proteins: 15-20%</li>
                        <li>Fats: 20-25%</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <th>Meal Plan</th>
                <td>
                    <ul>
                        <li>Breakfast: Whole grain pancakes with syrup and berries.</li>
                        <li>Mid-Morning Snack: Granola bar, fruit.</li>
                        <li>Lunch: Grilled chicken with pasta and vegetable stir-fry.</li>
                        <li>Afternoon Snack: Trail mix and protein shake.</li>
                        <li>Pre-Training Snack: Rice cakes with nut butter.</li>
                        <li>Dinner: Baked salmon with quinoa and roasted vegetables.</li>
                        <li>Evening Snack: Cottage cheese with peaches.</li>
                    </ul>
                </td>
            </tr>
        </table>
    `,
    football: `
        <h3 class="nutritional-title">Nutritional Plan for a Football Player</h3>
        <table class="table">
            <tr>
                <th>Daily Caloric Intake</th>
                <td>3,500 - 5,000 kcal per day</td>
            </tr>
            <tr>
                <th>Macronutrient Distribution</th>
                <td>
                    <ul>
                        <li>Carbohydrates: 55-65%</li>
                        <li>Proteins: 15-20%</li>
                        <li>Fats: 20-30%</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <th>Meal Plan</th>
                <td>
                    <ul>
                        <li>Breakfast: Whole grain toast with avocado and poached eggs.</li>
                        <li>Mid-Morning Snack: Oatmeal with berries and honey.</li>
                        <li>Lunch: Grilled chicken with brown rice and steamed vegetables.</li>
                        <li>Afternoon Snack: Protein bar, veggie sticks.</li>
                        <li>Pre-Training Snack: Whole grain wrap with turkey.</li>
                        <li>Dinner: Lean beef with sweet potatoes and broccoli.</li>
                        <li>Evening Snack: Greek yogurt with honey and nuts.</li>
                    </ul>
                </td>
            </tr>
        </table>
    `,
    "cricket-batsman": `
        <h3 class="nutritional-title">Nutritional Plan for a Cricket Batsman</h3>
        <table class="table">
            <tr>
                <th>Daily Caloric Intake</th>
                <td>3,000 - 4,000 kcal per day</td>
            </tr>
            <tr>
                <th>Macronutrient Distribution</th>
                <td>
                    <ul>
                        <li>Carbohydrates: 55-65%</li>
                        <li>Proteins: 15-20%</li>
                        <li>Fats: 20-30%</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <th>Meal Plan</th>
                <td>
                    <ul>
                        <li>Breakfast: Whole grain toast with eggs, fruit smoothie.</li>
                        <li>Mid-Morning Snack: Mixed nuts and a banana.</li>
                        <li>Lunch: Grilled chicken with brown rice and vegetables.</li>
                        <li>Afternoon Snack: Protein bar or yogurt.</li>
                        <li>Pre-Match Snack: Oatmeal with honey.</li>
                        <li>Dinner: Fish with sweet potatoes and green vegetables.</li>
                        <li>Evening Snack: Cottage cheese with fruit.</li>
                    </ul>
                </td>
            </tr>
        </table>
    `,
    "cricket-bowler": `
        <h3 class="nutritional-title">Nutritional Plan for a Cricket Bowler</h3>
        <table class="table">
            <tr>
                <th>Daily Caloric Intake</th>
                <td>3,500 - 4,500 kcal per day</td>
            </tr>
            <tr>
                <th>Macronutrient Distribution</th>
                <td>
                    <ul>
                        <li>Carbohydrates: 55-65%</li>
                        <li>Proteins: 20-25%</li>
                        <li>Fats: 20-30%</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <th>Meal Plan</th>
                <td>
                    <ul>
                        <li>Breakfast: Oatmeal with protein powder and berries.</li>
                        <li>Mid-Morning Snack: Energy bar and an apple.</li>
                        <li>Lunch: Lean meat with quinoa and mixed vegetables.</li>
                        <li>Afternoon Snack: Greek yogurt with nuts.</li>
                        <li>Pre-Training Snack: Whole grain toast with peanut butter.</li>
                        <li>Dinner: Grilled chicken with brown rice and broccoli.</li>
                        <li>Evening Snack: A protein shake or cottage cheese.</li>
                    </ul>
                </td>
            </tr>
        </table>
    `
};

function showPlan() {
    const sportSelect = document.getElementById('sports');
    const planDiv = document.getElementById('plan');
    const title = document.getElementById('sport-title');
    const nutritionalPlan = document.getElementById('nutritional-plan');

    const selectedSport = sportSelect.value;

    if (selectedSport) {
        title.innerText = selectedSport.replace(/-/g, ' ').replace(/\b\w/g, char => char.toUpperCase());
        nutritionalPlan.innerHTML = nutritionalPlans[selectedSport];
        planDiv.style.display = 'block';
    }
}