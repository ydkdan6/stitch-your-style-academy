export const moduleData = [
  {
    id: 1,
    title: "Tailoring Fundamentals",
    description: "Master the basics of tailoring including fabric selection, tools, and essential measurements.",
    duration: "4 weeks",
    level: "Beginner",
    lessons: [
      {
        id: 1,
        title: "Essential Tailoring Tools & Equipment",
        duration: "20 min",
        content: `
          <h3><strong>Welcome to Tailoring Fundamentals!</strong></h3>
          <p><strong>Every great tailor starts with the right tools.</strong> Quality tools not only make your work easier but also ensure professional results that will last for years.</p>
          
          <br>
          
          <h4><strong>📏 Measuring Tools</strong></h4>
          <ul style="line-height: 1.8; margin-bottom: 1.5rem;">
            <li><strong>Measuring Tape:</strong> A flexible 60-inch tape measure is essential. Look for one with clear markings and a sturdy case.</li>
            <li><strong>Rulers:</strong> Both 18-inch and 6-inch rulers for precise measurements and pattern work.</li>
            <li><strong>French Curve:</strong> Essential for creating smooth curved lines in pattern drafting.</li>
            <li><strong>Hip Curve:</strong> Specifically designed for shaping hip and armhole curves.</li>
          </ul>
          
          <h4><strong>✂️ Cutting Tools</strong></h4>
          <ul style="line-height: 1.8; margin-bottom: 1.5rem;">
            <li><strong>Fabric Shears:</strong> 8-10 inch shears dedicated only to fabric (never use on paper!).</li>
            <li><strong>Paper Scissors:</strong> Separate scissors for cutting patterns and paper.</li>
            <li><strong>Seam Ripper:</strong> Your best friend for fixing mistakes - everyone needs one!</li>
            <li><strong>Rotary Cutter:</strong> Perfect for cutting multiple layers and straight lines.</li>
          </ul>
          
          <h4><strong>🖊️ Marking Tools</strong></h4>
          <ul style="line-height: 1.8; margin-bottom: 1.5rem;">
            <li><strong>Fabric Chalk:</strong> Easily removable marks for temporary markings.</li>
            <li><strong>Water-Soluble Markers:</strong> Great for detailed markings that wash out.</li>
            <li><strong>Tracing Wheel:</strong> Transfer pattern markings to fabric.</li>
            <li><strong>Tailor's Tacks:</strong> Thread markings for precise pattern transfers.</li>
          </ul>
          
          <h4><strong>🔥 Pressing Equipment</strong></h4>
          <p style="margin-bottom: 1rem;"><strong>Pressing is crucial in tailoring - it's what separates amateur from professional work:</strong></p>
          <ul style="line-height: 1.8; margin-bottom: 1.5rem;">
            <li><strong>Steam Iron:</strong> A good quality iron with variable steam settings.</li>
            <li><strong>Pressing Cloth:</strong> Protects delicate fabrics during pressing.</li>
            <li><strong>Tailor's Ham:</strong> Curved pressing surface for 3D shaping.</li>
            <li><strong>Sleeve Roll:</strong> For pressing sleeve seams without creating creases.</li>
          </ul>
          
          <br>
          
          <h4><strong>💡 Pro Tips from Craftsy Experts:</strong></h4>
          <ul style="line-height: 1.8; margin-bottom: 1.5rem;">
            <li><strong>Invest in quality shears</strong> - they'll last decades with proper care</li>
            <li><strong>Keep tools organized and clean</strong> for consistent results</li>
            <li><strong>Start with basic tools</strong> and build your collection over time</li>
            <li><strong>Consider left-handed tools</strong> if you're left-handed</li>
          </ul>
        `,
        videoUrl: "https://www.youtube.com/embed/cBaN3WURmDw"
      },
      {
        id: 2,
        title: "Understanding Fabric Types & Properties",
        duration: "25 min",
        content: `
          <h3><strong>The Foundation of Great Garments: Fabric Selection</strong></h3>
          <p><strong>Understanding fabric is crucial for successful tailoring.</strong> Each fabric behaves differently during construction and wear, making proper selection essential for your project's success.</p>
          
          <br>
          
          <h4><strong>🌿 Natural Fibers</strong></h4>
          
          <h5><strong>Cotton</strong></h5>
          <ul style="line-height: 1.8; margin-bottom: 1.2rem;">
            <li><strong>Properties:</strong> Breathable, absorbent, easy to work with</li>
            <li><strong>Best for:</strong> Shirts, casual dresses, beginner projects</li>
            <li><strong>Tip:</strong> Pre-shrink cotton fabrics before cutting</li>
          </ul>
          
          <h5><strong>Wool</strong></h5>
          <ul style="line-height: 1.8; margin-bottom: 1.2rem;">
            <li><strong>Properties:</strong> Naturally drapes well, holds its shape, warm</li>
            <li><strong>Best for:</strong> Suits, coats, structured garments</li>
            <li><strong>Varieties:</strong> Worsted (smooth), woolen (fuzzy), tropical (lightweight)</li>
          </ul>
          
          <h5><strong>Silk</strong></h5>
          <ul style="line-height: 1.8; margin-bottom: 1.2rem;">
            <li><strong>Properties:</strong> Luxurious drape, strong yet delicate</li>
            <li><strong>Best for:</strong> Blouses, linings, evening wear</li>
            <li><strong>Care tip:</strong> Use fine needles and silk thread</li>
          </ul>
          
          <h5><strong>Linen</strong></h5>
          <ul style="line-height: 1.8; margin-bottom: 1.5rem;">
            <li><strong>Properties:</strong> Cool, crisp, wrinkles easily</li>
            <li><strong>Best for:</strong> Summer garments, casual wear</li>
            <li><strong>Note:</strong> Embrace the natural wrinkled texture</li>
          </ul>
          
          <h4><strong>🧪 Synthetic Fibers</strong></h4>
          
          <h5><strong>Polyester</strong></h5>
          <ul style="line-height: 1.8; margin-bottom: 1.2rem;">
            <li><strong>Properties:</strong> Wrinkle-resistant, durable, holds color well</li>
            <li><strong>Best for:</strong> Workwear, activewear, blends</li>
            <li><strong>Tip:</strong> Use lower iron temperatures</li>
          </ul>
          
          <h5><strong>Spandex/Elastane</strong></h5>
          <ul style="line-height: 1.8; margin-bottom: 1.5rem;">
            <li><strong>Properties:</strong> Excellent stretch and recovery</li>
            <li><strong>Best for:</strong> Fitted garments, activewear</li>
            <li><strong>Note:</strong> Usually blended with other fibers (2-5%)</li>
          </ul>
          
          <h4><strong>⚖️ Fabric Weight & Drape</strong></h4>
          <ul style="line-height: 1.8; margin-bottom: 1.5rem;">
            <li><strong>Lightweight:</strong> Chiffon, silk, cotton voile (blouses, linings)</li>
            <li><strong>Medium weight:</strong> Cotton poplin, wool crepe (dresses, shirts)</li>
            <li><strong>Heavy weight:</strong> Denim, coating, canvas (jackets, pants)</li>
          </ul>
          
          <h4><strong>📐 Grain Lines & Fabric Behavior</strong></h4>
          <ul style="line-height: 1.8; margin-bottom: 1.5rem;">
            <li><strong>Lengthwise grain:</strong> Runs parallel to selvage, most stable</li>
            <li><strong>Crosswise grain:</strong> Perpendicular to selvage, slight stretch</li>
            <li><strong>Bias:</strong> 45-degree angle, maximum stretch and drape</li>
          </ul>
          
          <br>
          
          <h4><strong>🔧 Fabric Preparation Tips</strong></h4>
          <ul style="line-height: 1.8; margin-bottom: 1.5rem;">
            <li><strong>Always pre-wash fabrics</strong> that will be washed later</li>
            <li><strong>Press fabric before cutting</strong> for accurate measurements</li>
            <li><strong>Check for fabric flaws</strong> before cutting</li>
            <li><strong>Understand the fabric's care requirements</strong> before starting</li>
          </ul>
        `,
        videoUrl: "https://youtube.com/embed/W88_7gR6B5I"
      },
      {
        id: 3,
        title: "Taking Accurate Body Measurements",
        duration: "30 min",
        content: `
          <h3><strong>The Art of Accurate Measurements</strong></h3>
          <p><strong>Proper measurements are the foundation of well-fitting garments.</strong> Even the most beautiful construction will fail if the measurements are incorrect.</p>
          
          <br>
          
          <h4><strong>🛠️ Essential Equipment</strong></h4>
          <ul style="line-height: 1.8; margin-bottom: 1.5rem;">
            <li><strong>Flexible measuring tape</strong></li>
            <li><strong>String or narrow elastic</strong> for marking waistline</li>
            <li><strong>Notepad</strong> for recording measurements</li>
            <li><strong>Mirror</strong> for checking tape position</li>
          </ul>
          
          <h4><strong>📋 General Guidelines</strong></h4>
          <ul style="line-height: 1.8; margin-bottom: 1.5rem;">
            <li><strong>Wear well-fitted undergarments</strong> or form-fitting clothes</li>
            <li><strong>Stand naturally</strong> with arms at sides</li>
            <li><strong>Keep tape measure snug but not tight</strong></li>
            <li><strong>Take measurements over clothes</strong> you'll typically wear under the garment</li>
            <li><strong>Record measurements immediately</strong></li>
          </ul>
          
          <br>
          
          <h4><strong>📏 Key Body Measurements</strong></h4>
          
          <h5><strong>Bust/Chest</strong></h5>
          <ul style="line-height: 1.8; margin-bottom: 1.2rem;">
            <li><strong>Location:</strong> Around the fullest part of the bust/chest</li>
            <li><strong>Tip:</strong> Keep tape parallel to floor, don't pull tight</li>
            <li><strong>For women:</strong> Wear a well-fitted bra</li>
          </ul>
          
          <h5><strong>Waist</strong></h5>
          <ul style="line-height: 1.8; margin-bottom: 1.2rem;">
            <li><strong>Location:</strong> Natural waistline (narrowest part of torso)</li>
            <li><strong>Tip:</strong> Tie string around natural waist first, then measure</li>
            <li><strong>Note:</strong> Don't suck in stomach</li>
          </ul>
          
          <h5><strong>Hips</strong></h5>
          <ul style="line-height: 1.8; margin-bottom: 1.2rem;">
            <li><strong>Location:</strong> Around fullest part of hips and buttocks</li>
            <li><strong>Distance:</strong> Usually 7-9 inches below waist</li>
            <li><strong>Tip:</strong> Include any curves or figure variations</li>
          </ul>
          
          <h5><strong>Shoulder Measurements</strong></h5>
          <ul style="line-height: 1.8; margin-bottom: 1.2rem;">
            <li><strong>Shoulder width:</strong> From shoulder point to shoulder point across back</li>
            <li><strong>Shoulder slope:</strong> From base of neck to shoulder point</li>
            <li><strong>Back width:</strong> Across shoulder blades with arms slightly forward</li>
          </ul>
          
          <h5><strong>Arm Measurements</strong></h5>
          <ul style="line-height: 1.8; margin-bottom: 1.2rem;">
            <li><strong>Arm length:</strong> From shoulder point to wrist with arm slightly bent</li>
            <li><strong>Upper arm:</strong> Around fullest part of upper arm</li>
            <li><strong>Forearm:</strong> Around fullest part of forearm</li>
            <li><strong>Wrist:</strong> Around wrist bone</li>
          </ul>
          
          <h5><strong>Length Measurements</strong></h5>
          <ul style="line-height: 1.8; margin-bottom: 1.5rem;">
            <li><strong>Back length:</strong> From base of neck to desired hemline</li>
            <li><strong>Front length:</strong> From shoulder point over bust to waist</li>
            <li><strong>Side length:</strong> From armpit to desired hemline</li>
          </ul>
          
          <br>
          
          <h4><strong>🎯 Special Considerations</strong></h4>
          
          <h5><strong>For Different Body Types</strong></h5>
          <ul style="line-height: 1.8; margin-bottom: 1.2rem;">
            <li><strong>Full bust:</strong> Take high bust measurement (above bust)</li>
            <li><strong>Pregnant figures:</strong> Allow for growth, take frequent measurements</li>
            <li><strong>Posture variations:</strong> Measure in natural standing position</li>
          </ul>
          
          <h5><strong>Ease Allowances</strong></h5>
          <ul style="line-height: 1.8; margin-bottom: 1.5rem;">
            <li><strong>Wearing ease:</strong> Minimum needed for movement and comfort</li>
            <li><strong>Design ease:</strong> Added for style and silhouette</li>
            <li><strong>Fitted garments:</strong> 2-4 inches ease at bust/chest</li>
            <li><strong>Relaxed fit:</strong> 4-8 inches ease at bust/chest</li>
          </ul>
          
          <h4><strong>💡 Professional Tips</strong></h4>
          <ul style="line-height: 1.8; margin-bottom: 1.5rem;">
            <li><strong>Take measurements at the same time of day</strong> for consistency</li>
            <li><strong>Have someone else take measurements</strong> when possible</li>
            <li><strong>Double-check critical measurements</strong></li>
            <li><strong>Keep a measurement chart</strong> for regular clients</li>
            <li><strong>Update measurements periodically</strong> as bodies change</li>
          </ul>
          
          <h4><strong>❌ Common Measurement Mistakes</strong></h4>
          <ul style="line-height: 1.8; margin-bottom: 1.5rem;">
            <li><strong>Taking measurements too tightly</strong></li>
            <li><strong>Not keeping tape level</strong></li>
            <li><strong>Measuring over bulky clothing</strong></li>
            <li><strong>Forgetting to record measurements immediately</strong></li>
            <li><strong>Not accounting for posture differences</strong></li>
          </ul>
        `,
        videoUrl: "https://youtube.com/embed/NCJO_KNOqs0"
      }
    ]
  },
  {
    id: 2,
    title: "Pattern Drafting & Design",
    description: "Learn to create your own patterns from basic blocks to complex designs.",
    duration: "6 weeks",
    level: "Intermediate",
    lessons: [
      {
        id: 4,
        title: "Basic Pattern Blocks - The Foundation",
        duration: "35 min",
        content: `
          <h3><strong>Understanding Pattern Blocks</strong></h3>
          <p><strong>Pattern blocks are the foundation of all garment design.</strong> They're basic templates that fit the body closely and serve as the starting point for all other patterns.</p>
          
          <br>
          
          <h4><strong>🔍 What are Pattern Blocks?</strong></h4>
          <ul style="line-height: 1.8; margin-bottom: 1.5rem;">
            <li><strong>Close-fitting templates</strong> based on body measurements</li>
            <li><strong>Have minimal ease</strong> for movement only</li>
            <li><strong>Contain no style lines</strong> or design details</li>
            <li><strong>Used as the basis</strong> for creating styled patterns</li>
          </ul>
          
          <h4><strong>📦 Types of Basic Blocks</strong></h4>
          
          <h5><strong>Bodice Block (Torso)</strong></h5>
          <ul style="line-height: 1.8; margin-bottom: 1.2rem;">
            <li><strong>Purpose:</strong> Fits from shoulder to waist</li>
            <li><strong>Key elements:</strong> Bust dart, waist shaping, armhole curve</li>
            <li><strong>Uses:</strong> Blouses, dresses, jackets, coats</li>
          </ul>
          
          <h5><strong>Skirt Block</strong></h5>
          <ul style="line-height: 1.8; margin-bottom: 1.2rem;">
            <li><strong>Purpose:</strong> Fits from waist to desired length</li>
            <li><strong>Key elements:</strong> Waist shaping, hip curve, hem line</li>
            <li><strong>Uses:</strong> Skirts, dress bottoms, pants foundation</li>
          </ul>
          
          <h5><strong>Sleeve Block</strong></h5>
          <ul style="line-height: 1.8; margin-bottom: 1.2rem;">
            <li><strong>Purpose:</strong> Fits the arm and connects to bodice</li>
            <li><strong>Key elements:</strong> Sleeve cap, elbow curve, wrist shaping</li>
            <li><strong>Uses:</strong> All sleeve variations</li>
          </ul>
          
          <h5><strong>Trouser Block</strong></h5>
          <ul style="line-height: 1.8; margin-bottom: 1.5rem;">
            <li><strong>Purpose:</strong> Fits from waist to ankle</li>
            <li><strong>Key elements:</strong> Crotch curve, leg shaping, waist fit</li>
            <li><strong>Uses:</strong> Pants, shorts, overalls</li>
          </ul>
          
          <br>
          
          <h4><strong>👗 Creating Your First Bodice Block</strong></h4>
          
          <h5><strong>Required Measurements</strong></h5>
          <ul style="line-height: 1.8; margin-bottom: 1.2rem;">
            <li><strong>Bust circumference</strong></li>
            <li><strong>Waist circumference</strong></li>
            <li><strong>Back width</strong></li>
            <li><strong>Front width</strong></li>
            <li><strong>Shoulder length</strong></li>
            <li><strong>Armhole depth</strong></li>
            <li><strong>Back length</strong></li>
            <li><strong>Front length</strong></li>
          </ul>
          
          <h5><strong>Step-by-Step Process</strong></h5>
          <ol style="line-height: 1.8; margin-bottom: 1.5rem;">
            <li><strong>Draw the back block:</strong> Start with center back line</li>
            <li><strong>Add width measurements:</strong> Mark back width and armhole</li>
            <li><strong>Shape the armhole:</strong> Create smooth curve using French curve</li>
            <li><strong>Add waist shaping:</strong> Calculate dart positions and sizes</li>
            <li><strong>Create front block:</strong> Adjust for bust prominence</li>
            <li><strong>Add bust dart:</strong> Calculate dart size and placement</li>
          </ol>
          
          <h4><strong>📐 Understanding Darts</strong></h4>
          <ul style="line-height: 1.8; margin-bottom: 1.5rem;">
            <li><strong>Purpose:</strong> Remove excess fabric to create 3D shape</li>
            <li><strong>Placement:</strong> At natural body curves (bust, waist, shoulder blade)</li>
            <li><strong>Rules:</strong> Point toward but don't reach the fullest part</li>
            <li><strong>Types:</strong> Single point, double point, curved</li>
          </ul>
          
          <h4><strong>📏 Ease in Pattern Blocks</strong></h4>
          
          <h5><strong>Wearing Ease (Essential)</strong></h5>
          <ul style="line-height: 1.8; margin-bottom: 1.2rem;">
            <li><strong>Bust/Chest:</strong> 3-4 inches</li>
            <li><strong>Waist:</strong> 1-2 inches</li>
            <li><strong>Hips:</strong> 2-3 inches</li>
            <li><strong>Upper arm:</strong> 1-2 inches</li>
          </ul>
          
          <h5><strong>Design Ease (Added Later)</strong></h5>
          <ul style="line-height: 1.8; margin-bottom: 1.5rem;">
            <li><strong>Added during pattern development</strong></li>
            <li><strong>Determines garment silhouette</strong></li>
            <li><strong>Varies by style and designer preference</strong></li>
          </ul>
          
          <br>
          
          <h4><strong>🧪 Testing Your Block</strong></h4>
          <ul style="line-height: 1.8; margin-bottom: 1.5rem;">
            <li><strong>Make a test garment</strong> (toile/muslin)</li>
            <li><strong>Use inexpensive fabric</strong> similar in weight to final fabric</li>
            <li><strong>Check fit at all key points</strong></li>
            <li><strong>Adjust block as needed</strong></li>
            <li><strong>Keep detailed notes</strong> of adjustments</li>
          </ul>
          
          <h4><strong>🔧 Common Block Adjustments</strong></h4>
          
          <h5><strong>Full Bust Adjustment (FBA)</strong></h5>
          <ul style="line-height: 1.8; margin-bottom: 1.2rem;">
            <li><strong>For bust larger than pattern size</strong></li>
            <li><strong>Adds width and adjusts dart size</strong></li>
            <li><strong>Maintains proper armhole fit</strong></li>
          </ul>
          
          <h5><strong>Shoulder Adjustments</strong></h5>
          <ul style="line-height: 1.8; margin-bottom: 1.2rem;">
            <li><strong>Narrow/broad shoulders</strong></li>
            <li><strong>Forward/square shoulders</strong></li>
            <li><strong>Sloping/square shoulder angle</strong></li>
          </ul>
          
          <h5><strong>Length Adjustments</strong></h5>
          <ul style="line-height: 1.8; margin-bottom: 1.5rem;">
            <li><strong>Lengthen/shorten torso</strong></li>
            <li><strong>Adjust for posture differences</strong></li>
            <li><strong>Modify for proportion preferences</strong></li>
          </ul>
          
          <h4><strong>💡 Professional Tips</strong></h4>
          <ul style="line-height: 1.8; margin-bottom: 1.5rem;">
            <li><strong>Create blocks in your most common size first</strong></li>
            <li><strong>Use quality pattern paper</strong> for durability</li>
            <li><strong>Label all pieces clearly</strong></li>
            <li><strong>Store blocks flat or rolled</strong></li>
            <li><strong>Update blocks as your skills improve</strong></li>
          </ul>
        `,
        videoUrl: "https://youtube.com/embed/MWbEl0kibCA"
      },
      {
        id: 5,
        title: "Pattern Manipulation Techniques",
        duration: "40 min",
        content: `
          <h3><strong>From Basic Block to Stylish Design</strong></h3>
          <p><strong>Pattern manipulation is where creativity meets technical skill.</strong> Learn to transform your basic blocks into unlimited design possibilities.</p>
          
          <br>
          
          <h4><strong>🛠️ Fundamental Manipulation Techniques</strong></h4>
          
          <h5><strong>Dart Manipulation</strong></h5>
          <ul style="line-height: 1.8; margin-bottom: 1.2rem;">
            <li><strong>Dart rotation:</strong> Move darts to different positions</li>
            <li><strong>Dart elimination:</strong> Convert darts to ease or gathers</li>
            <li><strong>Dart conversion:</strong> Change single darts to multiple darts</li>
            <li><strong>Dart to seam:</strong> Move dart fullness to seam lines</li>
          </ul>
          
          <h5><strong>Adding Fullness</strong></h5>
          <ul style="line-height: 1.8; margin-bottom: 1.5rem;">
            <li><strong>Gathers:</strong> Add controlled fullness at seams</li>
            <li><strong>Pleats:</strong> Structured folds for controlled volume</li>
            <li><strong>Flare:</strong> Gradual widening from fitted areas</li>
            <li><strong>Godets:</strong> Triangular inserts for dramatic flare</li>
          </ul>
          
          <h4><strong>📐 Design Line Development</strong></h4>
          
          <h5><strong>Princess Seams</strong></h5>
          <ul style="line-height: 1.8; margin-bottom: 1.2rem;">
            <li><strong>Curved seams</strong> from shoulder or armhole to hem</li>
            <li><strong>Eliminates waist darts</strong></li>
            <li><strong>Creates flattering vertical lines</strong></li>
            <li><strong>Process:</strong> Draw curved line, split pattern, add seam allowances</li>
          </ul>
          
          <h5><strong>Empire Waistlines</strong></h5>
          <ul style="line-height: 1.8; margin-bottom: 1.2rem;">
            <li><strong>Raised waistline</strong> under bust</li>
            <li><strong>Separates bodice and skirt sections</strong></li>
            <li><strong>Flattering for many body types</strong></li>
            <li><strong>Process:</strong> Mark new waistline, add gathering or pleats to skirt</li>
          </ul>
          
          <h5><strong>Yokes</strong></h5>
          <ul style="line-height: 1.8; margin-bottom: 1.5rem;">
            <li><strong>Separate fitted upper sections</strong></li>
            <li><strong>Can be straight, curved, or angled</strong></li>
            <li><strong>Allows for fabric play and design interest</strong></li>
            <li><strong>Process:</strong> Draw yoke line, separate pieces, add gathering below</li>
          </ul>
          
          <br>
          
          <h4><strong>👕 Sleeve Modifications</strong></h4>
          
          <h5><strong>Sleeve Length Variations</strong></h5>
          <ul style="line-height: 1.8; margin-bottom: 1.2rem;">
            <li><strong>Cap sleeves:</strong> Shorten to shoulder area</li>
            <li><strong>Three-quarter:</strong> End at forearm</li>
            <li><strong>Extended:</strong> Add length beyond wrist</li>
          </ul>
          
          <h5><strong>Sleeve Volume Changes</strong></h5>
          <ul style="line-height: 1.8; margin-bottom: 1.5rem;">
            <li><strong>Gathered sleeves:</strong> Add width, gather to fit armhole</li>
            <li><strong>Puffed sleeves:</strong> Add volume to upper arm area</li>
            <li><strong>Fitted sleeves:</strong> Remove ease for close fit</li>
          </ul>
          
          <h4><strong>👔 Neckline Modifications</strong></h4>
          
          <h5><strong>Popular Neckline Styles</strong></h5>
          <ul style="line-height: 1.8; margin-bottom: 1.2rem;">
            <li><strong>Scoop neck:</strong> Curved lower neckline</li>
            <li><strong>V-neck:</strong> Angular dip in front</li>
            <li><strong>Boat neck:</strong> Wide, shallow neckline</li>
            <li><strong>Square neck:</strong> Geometric straight lines</li>
            <li><strong>Off-shoulder:</strong> Expose shoulders and collarbones</li>
          </ul>
          
          <h5><strong>Neckline Development Process</strong></h5>
          <ol style="line-height: 1.8; margin-bottom: 1.5rem;">
            <li><strong>Mark desired neckline</strong> on pattern</li>
            <li><strong>Smooth curves</strong> with French curve</li>
            <li><strong>Check that neckline will go over head</strong></li>
            <li><strong>Add appropriate facing or binding</strong></li>
            <li><strong>Test fit</strong> before cutting final fabric</li>
          </ol>
          
          <br>
          
          <h4><strong>🎯 Advanced Techniques</strong></h4>
          
          <h5><strong>Draping vs. Flat Pattern</strong></h5>
          <ul style="line-height: 1.8; margin-bottom: 1.2rem;">
            <li><strong>Flat pattern:</strong> Mathematical approach on paper</li>
            <li><strong>Draping:</strong> 3D approach on dress form</li>
            <li><strong>Combination:</strong> Use both methods for complex designs</li>
          </ul>
          
          <h5><strong>Creating Asymmetrical Designs</strong></h5>
          <ul style="line-height: 1.8; margin-bottom: 1.5rem;">
            <li><strong>Different left and right sides</strong></li>
            <li><strong>Requires careful balance and proportion</strong></li>
            <li><strong>Mark clearly which side is which</strong></li>
            <li><strong>Consider how design affects body movement</strong></li>
          </ul>
          
          <h4><strong>📊 Pattern Grading Basics</strong></h4>
          <ul style="line-height: 1.8; margin-bottom: 1.5rem;">
            <li><strong>Purpose:</strong> Create multiple sizes from one pattern</li>
            <li><strong>Grade rules:</strong> Consistent increases/decreases between sizes</li>
            <li><strong>Key points:</strong> Maintain proportions and fit</li>
            <li><strong>Tools:</strong> Grading rules, computer software, or manual methods</li>
          </ul>
          
          <h4><strong>💻 Digital Pattern Making</strong></h4>
          <ul style="line-height: 1.8; margin-bottom: 1.5rem;">
            <li><strong>Software options:</strong> CLO 3D, Browzwear, PatternMaster</li>
            <li><strong>Benefits:</strong> Easy modifications, accurate grading, 3D visualization</li>
            <li><strong>Learning curve:</strong> Investment in time and software</li>
            <li><strong>Integration:</strong> Combine with traditional methods</li>
          </ul>
          
          <br>
          
          <h4><strong>🧪 Testing and Refining</strong></h4>
          
          <h5><strong>Making a Toile (Muslin)</strong></h5>
          <ul style="line-height: 1.8; margin-bottom: 1.2rem;">
            <li><strong>Use inexpensive fabric</strong> similar to final fabric</li>
            <li><strong>Test all design elements</strong></li>
            <li><strong>Check ease and movement</strong></li>
            <li><strong>Photograph for reference</strong></li>
          </ul>
          
          <h5><strong>Pattern Refinement Process</strong></h5>
          <ol style="line-height: 1.8; margin-bottom: 1.5rem;">
            <li><strong>Identify fit issues</strong> in toile</li>
            <li><strong>Mark corrections directly</strong> on toile</li>
            <li><strong>Transfer corrections</strong> to pattern</li>
            <li><strong>Make second toile</strong> if major changes needed</li>
            <li><strong>Document all changes</strong> for future reference</li>
          </ol>
          
          <h4><strong>📁 Professional Organization</strong></h4>
          <ul style="line-height: 1.8; margin-bottom: 1.5rem;">
            <li><strong>Label all pattern pieces clearly</strong></li>
            <li><strong>Include grain lines, notches, and construction marks</strong></li>
            <li><strong>Store patterns flat or carefully folded</strong></li>
            <li><strong>Keep digital backups</strong> of all patterns</li>
            <li><strong>Maintain a design notebook</strong> with sketches and notes</li>
          </ul>
        `,
        videoUrl: "https://youtube.com/embed/dyT3576fntY"
      }
    ]
  },
  {
    id: 3,
    title: "Advanced Sewing Techniques",
    description: "Professional finishing methods, complex construction, and couture techniques.",
    duration: "8 weeks",
    level: "Advanced",
    lessons: [
      {
        id: 6,
        title: "Professional Seam Finishes",
        duration: "30 min",
        content: `
          <h3><strong>Elevating Your Work with Professional Seam Finishes</strong></h3>
          <p><strong>The difference between homemade and professionally-made garments often lies in the seam finishes.</strong> Master these techniques for couture-quality results.</p>
          
          <br>
          
          <h4><strong>🎯 Why Seam Finishes Matter</strong></h4>
          <ul style="line-height: 1.8; margin-bottom: 1.5rem;">
            <li><strong>Prevent fraying</strong> and extend garment life</li>
            <li><strong>Add structural integrity</strong></li>
            <li><strong>Create professional interior appearance</strong></li>
            <li><strong>Improve comfort and wearability</strong></li>
          </ul>
          
          <h4><strong>✂️ Basic Seam Finishes</strong></h4>
          
          <h5><strong>Pinking</strong></h5>
          <ul style="line-height: 1.8; margin-bottom: 1.2rem;">
            <li><strong>Method:</strong> Cut raw edges with pinking shears</li>
            <li><strong>Best for:</strong> Fabrics that don't fray heavily</li>
            <li><strong>Pros:</strong> Quick and easy</li>
            <li><strong>Cons:</strong> Not suitable for all fabrics</li>
          </ul>
          
          <h5><strong>Zigzag Stitch</strong></h5>
          <ul style="line-height: 1.8; margin-bottom: 1.2rem;">
            <li><strong>Method:</strong> Machine zigzag over raw edges</li>
            <li><strong>Settings:</strong> Medium width and length</li>
            <li><strong>Best for:</strong> Most woven fabrics</li>
            <li><strong>Tip:</strong> Don't stretch fabric while stitching</li>
          </ul>
          
          <h5><strong>Serged/Overlock</strong></h5>
          <ul style="line-height: 1.8; margin-bottom: 1.5rem;">
            <li><strong>Method:</strong> Use serger to cut and finish in one step</li>
            <li><strong>Best for:</strong> Knits and fabrics that fray easily</li>
            <li><strong>Professional look:</strong> Clean, no-bulk finish</li>
            <li><strong>Equipment:</strong> Requires serger/overlock machine</li>
          </ul>
          
          <br>
          
          <h4><strong>🔧 Intermediate Seam Finishes</strong></h4>
          
          <h5><strong>Turned and Stitched</strong></h5>
          <ul style="line-height: 1.8; margin-bottom: 1.2rem;">
            <li><strong>Method:</strong> Turn raw edge under 1/4", stitch close to fold</li>
            <li><strong>Best for:</strong> Unlined garments, visible seams</li>
            <li><strong>Appearance:</strong> Very neat and professional</li>
            <li><strong>Bulk:</strong> Adds some thickness</li>
          </ul>
          
          <h5><strong>Bound Seams</strong></h5>
          <ul style="line-height: 1.8; margin-bottom: 1.5rem;">
            <li><strong>Method:</strong> Encase raw edges in bias tape or fabric strip</li>
            <li><strong>Best for:</strong> Unlined jackets, luxury garments</li>
            <li><strong>Materials:</strong> Bias tape, self-fabric, or contrasting fabric</li>
            <li><strong>Time:</strong> More labor-intensive but beautiful results</li>
          </ul>
          
          <h4><strong>🏆 Advanced Professional Finishes</strong></h4>
          
          <h5><strong>Hong Kong Seams</strong></h5>
          <ul style="line-height: 1.8; margin-bottom: 1.2rem;">
            <li><strong>Method:</strong> Bind each seam allowance separately with bias strips</li>
            <li><strong>Process:</strong> Stitch bias to right side, wrap around, stitch from right side</li>
            <li><strong>Best for:</strong> High-end garments, raw silk, wool</li>
            <li><strong>Appearance:</strong> Extremely professional and durable</li>
          </ul>
          
          <h5><strong>French Seams</strong></h5>
          <ul style="line-height: 1.8; margin-bottom: 1.2rem;">
            <li><strong>Method:</strong> Enclosed seam with no raw edges visible</li>
            <li><strong>Process:</strong> 
              <ol style="line-height: 1.6; margin: 0.5rem 0;">
                <li><strong>Stitch wrong sides together</strong> at 3/8"</li>
                <li><strong>Trim to 1/8"</strong></li>
                <li><strong>Turn right sides together</strong></li>
                <li><strong>Stitch at 1/4"</strong> to enclose raw edges</li>
              </ol>
            </li>
            <li><strong>Best for:</strong> Fine fabrics, lingerie, blouses</li>
            <li><strong>Limitation:</strong> Only works on straight seams</li>
          </ul>
          
          <h5><strong>Flat Fell Seams</strong></h5>
          <ul style="line-height: 1.8; margin-bottom: 1.5rem;">
            <li><strong>Method:</strong> Strong, flat seam with enclosed edges</li>
            <li><strong>Process:</strong>
              <ol style="line-height: 1.6; margin: 0.5rem 0;">
                <li><strong>Stitch wrong sides together</strong></li>
                <li><strong>Trim one seam allowance</strong> to 1/8"</li>
                <li><strong>Fold longer allowance</strong> over shorter</li>
                <li><strong>Topstitch in place</strong></li>
              </ol>
            </li>
            <li><strong>Best for:</strong> Jeans, shirts, sportswear</li>
            <li><strong>Strength:</strong> Extremely durable</li>
          </ul>
          
          <br>
          
          <h4><strong>🎨 Specialized Techniques</strong></h4>
          
          <h5><strong>Mock French Seams</strong></h5>
          <ul style="line-height: 1.8; margin-bottom: 1.2rem;">
            <li><strong>Use:</strong> When French seams aren't possible on curved seams</li>
            <li><strong>Method:</strong> Turn raw edges in and topstitch together</li>
            <li><strong>Appearance:</strong> Similar to French seams but faster</li>
          </ul>
          
          <h5><strong>Lapped Seams</strong></h5>
          <ul style="line-height: 1.8; margin-bottom: 1.5rem;">
            <li><strong>Method:</strong> Overlap seam allowances and topstitch</li>
            <li><strong>Best for:</strong> Yokes, leather, ultrasuede</li>
            <li><strong>Advantage:</strong> Reduces bulk</li>
          </ul>
          
          <h4><strong>🧵 Fabric-Specific Considerations</strong></h4>
          
          <h5><strong>Delicate Fabrics</strong></h5>
          <ul style="line-height: 1.8; margin-bottom: 1.2rem;">
            <li><strong>Silk:</strong> French seams or bound seams</li>
            <li><strong>Chiffon:</strong> French seams or rolled hems</li>
            <li><strong>Lace:</strong> Minimal finishing, often left raw</li>
          </ul>
          
          <h5><strong>Heavy Fabrics</strong></h5>
          <ul style="line-height: 1.8; margin-bottom: 1.2rem;">
            <li><strong>Wool coating:</strong> Bound seams or serged</li>
            <li><strong>Denim:</strong> Flat fell seams or serged</li>
            <li><strong>Canvas:</strong> Pinking or turned and stitched</li>
          </ul>
          
          <h5><strong>Stretch Fabrics</strong></h5>
          <ul style="line-height: 1.8; margin-bottom: 1.5rem;">
            <li><strong>Knits:</strong> Serged or zigzag</li>
            <li><strong>Spandex blends:</strong> Serged with woolly nylon</li>
            <li><strong>Athletic wear:</strong> Flatlock or cover stitch</li>
          </ul>
          
          <br>
          
          <h4><strong>🛠️ Tools for Professional Finishing</strong></h4>
          <ul style="line-height: 1.8; margin-bottom: 1.5rem;">
            <li><strong>Pinking shears:</strong> Sharp, quality blades</li>
            <li><strong>Seam guide:</strong> For consistent seam allowances</li>
            <li><strong>Bias tape maker:</strong> For custom binding</li>
            <li><strong>Pressing tools:</strong> Essential for crisp finishes</li>
          </ul>
          
          <h4><strong>✅ Quality Control Tips</strong></h4>
          <ul style="line-height: 1.8; margin-bottom: 1.5rem;">
            <li><strong>Test seam finishes</strong> on fabric scraps first</li>
            <li><strong>Consider garment care requirements</strong></li>
            <li><strong>Match thread color</strong> to fabric or seam finish</li>
            <li><strong>Press seams properly</strong> before finishing</li>
            <li><strong>Be consistent</strong> throughout the garment</li>
          </ul>
        `,
        videoUrl: "https://www.youtube.com/embed/AC38yqMxMns"
      },
      {
        id: 7,
        title: "Buttonholes and Fastenings",
        duration: "35 min",
        content: `
          <h3><strong>Mastering Professional Buttonholes and Fastenings</strong></h3>
          <p><strong>Perfect buttonholes and fastenings are hallmarks of quality construction.</strong> Learn to create durable, beautiful closures that enhance your garments.</p>
          
          <br>
          
          <h4><strong>🔲 Types of Buttonholes</strong></h4>
          
          <h5><strong>Machine Buttonholes</strong></h5>
          <ul style="line-height: 1.8; margin-bottom: 1.2rem;">
            <li><strong>Standard buttonhole:</strong> Basic rectangular opening</li>
            <li><strong>Keyhole buttonhole:</strong> Round end for shank buttons</li>
            <li><strong>Bound buttonhole:</strong> Fabric-covered opening</li>
            <li><strong>Stretch buttonhole:</strong> For knit fabrics</li>
          </ul>
          
          <h5><strong>Hand-Sewn Buttonholes</strong></h5>
          <ul style="line-height: 1.8; margin-bottom: 1.5rem;">
            <li><strong>Traditional method:</strong> Time-intensive but beautiful</li>
            <li><strong>Blanket stitch:</strong> Creates strong, neat edges</li>
            <li><strong>Custom sizing:</strong> Perfect fit for any button</li>
            <li><strong>Couture finish:</strong> Ultimate in luxury construction</li>
          </ul>
          
          <br>
          
          <h4><strong>📐 Planning Buttonhole Placement</strong></h4>
          
          <h5><strong>Buttonhole Direction</strong></h5>
          <ul style="line-height: 1.8; margin-bottom: 1.2rem;">
            <li><strong>Horizontal:</strong> Most common, accommodates button pull</li>
            <li><strong>Vertical:</strong> For bands, plackets, and decorative use</li>
            <li><strong>Diagonal:</strong> Special design elements</li>
          </ul>
          
          <h5><strong>Spacing Guidelines</strong></h5>
          <ul style="line-height: 1.8; margin-bottom: 1.2rem;">
            <li><strong>Center front:</strong> Usually 2-4 inches apart</li>
            <li><strong>Sleeve plackets:</strong> 1-2 inches apart</li>
            <li><strong>Collar bands:</strong> Follow pattern specifications</li>
            <li><strong>Special consideration:</strong> Bust point, waistline placement</li>
          </ul>
          
          <h5><strong>Sizing Buttonholes</strong></h5>
          <ul style="line-height: 1.8; margin-bottom: 1.5rem;">
            <li><strong>Standard rule:</strong> Button diameter + thickness + 1/8"</li>
            <li><strong>Shank buttons:</strong> Add shank length</li>
            <li><strong>Test first:</strong> Always make sample buttonhole</li>
          </ul>
          
          <h4><strong>🔧 Machine Buttonhole Techniques</strong></h4>
          
          <h5><strong>Preparation Steps</strong></h5>
          <ol style="line-height: 1.8; margin-bottom: 1.2rem;">
            <li><strong>Mark buttonhole placement</strong> accurately</li>
            <li><strong>Interface areas</strong> for stability</li>
            <li><strong>Test on fabric scraps</strong></li>
            <li><strong>Use appropriate foot and settings</strong></li>
          </ol>
          
          <h5><strong>Executing Perfect Machine Buttonholes</strong></h5>
          <ul style="line-height: 1.8; margin-bottom: 1.2rem;">
            <li><strong>Stabilizer:</strong> Use tear-away or water-soluble</li>
            <li><strong>Thread:</strong> Match or coordinate with fabric</li>
            <li><strong>Tension:</strong> Adjust for balanced stitches</li>
            <li><strong>Speed:</strong> Sew slowly for control</li>
          </ul>
          
          <h5><strong>Cutting Buttonholes</strong></h5>
          <ul style="line-height: 1.8; margin-bottom: 1.5rem;">
            <li><strong>Tools:</strong> Seam ripper, small scissors, or buttonhole cutter</li>
            <li><strong>Method:</strong> Cut from center outward</li>
            <li><strong>Protection:</strong> Place pins at ends to prevent over-cutting</li>
          </ul>
          
          <br>
          
          <h4><strong>🎨 Bound Buttonholes</strong></h4>
          
          <h5><strong>When to Use</strong></h5>
          <ul style="line-height: 1.8; margin-bottom: 1.2rem;">
            <li><strong>Heavy or thick fabrics</strong></li>
            <li><strong>High-end garments</strong></li>
            <li><strong>When machine buttonholes aren't suitable</strong></li>
            <li><strong>Design feature or contrast element</strong></li>
          </ul>
          
          <h5><strong>Construction Method</strong></h5>
          <ol style="line-height: 1.8; margin-bottom: 1.5rem;">
            <li><strong>Cut fabric rectangles</strong> for lips</li>
            <li><strong>Position and baste</strong> to garment</li>
            <li><strong>Stitch rectangle outline</strong></li>
            <li><strong>Cut opening</strong> through all layers</li>
            <li><strong>Turn lips to inside</strong></li>
            <li><strong>Press and hand-finish ends</strong></li>
          </ol>
          
          <h4><strong>🪡 Hand-Sewn Buttonholes</strong></h4>
          
          <h5><strong>Tools Needed</strong></h5>
          <ul style="line-height: 1.8; margin-bottom: 1.2rem;">
            <li><strong>Sharp embroidery scissors</strong></li>
            <li><strong>Fine needles</strong> (size 9-11)</li>
            <li><strong>Quality thread</strong> (silk or cotton)</li>
            <li><strong>Thimble</strong></li>
          </ul>
          
          <h5><strong>Step-by-Step Process</strong></h5>
          <ol style="line-height: 1.8; margin-bottom: 1.5rem;">
            <li><strong>Mark buttonhole length</strong> precisely</li>
            <li><strong>Cut opening</strong> with sharp scissors</li>
            <li><strong>Work blanket stitch</strong> around edges</li>
            <li><strong>Create bar tacks</strong> at ends</li>
            <li><strong>Steam lightly</strong> to set stitches</li>
          </ol>
          
          <br>
          
          <h4><strong>🔗 Alternative Fastenings</strong></h4>
          
          <h5><strong>Zippers</strong></h5>
          <ul style="line-height: 1.8; margin-bottom: 1.2rem;">
            <li><strong>Centered application:</strong> Visible stitching on both sides</li>
            <li><strong>Lapped application:</strong> One side covers zipper</li>
            <li><strong>Invisible zippers:</strong> Hidden in seam</li>
            <li><strong>Separating zippers:</strong> For jackets and outerwear</li>
          </ul>
          
          <h5><strong>Snaps and Hooks</strong></h5>
          <ul style="line-height: 1.8; margin-bottom: 1.2rem;">
            <li><strong>Sew-on snaps:</strong> Traditional metal or plastic</li>
            <li><strong>Magnetic snaps:</strong> Hidden closure for bags</li>
            <li><strong>Hooks and eyes:</strong> Skirt and pants waistbands</li>
            <li><strong>Hook and loop:</strong> Adjustable, casual closures</li>
          </ul>
          
          <h5><strong>Toggles and Frogs</strong></h5>
          <ul style="line-height: 1.8; margin-bottom: 1.5rem;">
            <li><strong>Toggle buttons:</strong> Casual, sportswear style</li>
            <li><strong>Chinese frogs:</strong> Decorative, traditional closures</li>
            <li><strong>Loop and button:</strong> Elegant, minimal hardware</li>
          </ul>
          
          <h4><strong>🔘 Button Selection and Attachment</strong></h4>
          
          <h5><strong>Button Types</strong></h5>
          <ul style="line-height: 1.8; margin-bottom: 1.2rem;">
            <li><strong>Flat buttons:</strong> Holes through center</li>
            <li><strong>Shank buttons:</strong> Loop on back</li>
            <li><strong>Covered buttons:</strong> Fabric-wrapped</li>
            <li><strong>Specialty buttons:</strong> Leather, horn, metal, vintage</li>
          </ul>
          
          <h5><strong>Professional Button Attachment</strong></h5>
          <ul style="line-height: 1.8; margin-bottom: 1.5rem;">
            <li><strong>Thread shank:</strong> Creates space for fabric layers</li>
            <li><strong>Reinforcement:</strong> Small button on wrong side</li>
            <li><strong>Secure finishing:</strong> Multiple knots, thread ends buried</li>
            <li><strong>Consistent tension:</strong> All buttons attached similarly</li>
          </ul>
          
          <br>
          
          <h4><strong>🔧 Troubleshooting Common Issues</strong></h4>
          
          <h5><strong>Buttonhole Problems</strong></h5>
          <ul style="line-height: 1.8; margin-bottom: 1.2rem;">
            <li><strong>Gapping:</strong> Check button size, add interfacing</li>
            <li><strong>Puckering:</strong> Reduce tension, use stabilizer</li>
            <li><strong>Uneven stitching:</strong> Clean machine, check needle</li>
            <li><strong>Fabric jamming:</strong> Use appropriate presser foot</li>
          </ul>
          
          <h5><strong>Button Problems</strong></h5>
          <ul style="line-height: 1.8; margin-bottom: 1.5rem;">
            <li><strong>Loose buttons:</strong> Check thread shank length</li>
            <li><strong>Buttons pulling off:</strong> Add reinforcement button</li>
            <li><strong>Misaligned buttons:</strong> Re-mark placement carefully</li>
          </ul>
          
          <h4><strong>💡 Professional Tips</strong></h4>
          <ul style="line-height: 1.8; margin-bottom: 1.5rem;">
            <li><strong>Always interface buttonhole areas</strong></li>
            <li><strong>Test all techniques</strong> on scraps first</li>
            <li><strong>Keep extra buttons</strong> attached to garment care label</li>
            <li><strong>Consider garment care</strong> when selecting fastenings</li>
            <li><strong>Plan fastening placement</strong> during pattern layout</li>
          </ul>
        `,
        videoUrl: "https://www.youtube.com/embed/zZYlySVKaN0"
      }
    ]
  },
  {
    id: 4,
    title: "Business & Entrepreneurship",
    description: "Turn your tailoring skills into a successful business with marketing and client management.",
    duration: "4 weeks",
    level: "All Levels",
    lessons: [
      {
        id: 8,
        title: "Starting Your Tailoring Business",
        duration: "45 min",
        content: `
          <h3><strong>From Passion to Profit: Launching Your Tailoring Business</strong></h3>
          <p><strong>Transform your tailoring skills into a thriving business.</strong> Learn the essential steps to start, legal requirements, and foundation for success.</p>
          
          <br>
          
          <h4><strong>📋 Business Planning Fundamentals</strong></h4>
          
          <h5><strong>Defining Your Business Vision</strong></h5>
          <ul style="line-height: 1.8; margin-bottom: 1.2rem;">
            <li><strong>Mission statement:</strong> Why does your business exist?</li>
            <li><strong>Target market:</strong> Who are your ideal customers?</li>
            <li><strong>Unique value proposition:</strong> What sets you apart?</li>
            <li><strong>Long-term goals:</strong> Where do you see your business in 5 years?</li>
          </ul>
          
          <h5><strong>Business Model Options</strong></h5>
          <ul style="line-height: 1.8; margin-bottom: 1.5rem;">
            <li><strong>Custom tailoring:</strong> Bespoke garments for individual clients</li>
            <li><strong>Alterations service:</strong> Adjusting ready-to-wear clothing</li>
            <li><strong>Design and production:</strong> Creating your own clothing line</li>
            <li><strong>Teaching and workshops:</strong> Sharing your skills with others</li>
            <li><strong>Online business:</strong> Digital patterns, courses, consulting</li>
          </ul>
          
          <br>
          
          <h4><strong>⚖️ Legal and Administrative Setup</strong></h4>
          
          <h5><strong>Business Structure</strong></h5>
          <ul style="line-height: 1.8; margin-bottom: 1.2rem;">
            <li><strong>Sole proprietorship:</strong> Simplest structure, personal liability</li>
            <li><strong>LLC:</strong> Limited liability protection, tax flexibility</li>
            <li><strong>Corporation:</strong> Most protection, more complex requirements</li>
            <li><strong>Partnership:</strong> Shared ownership and responsibilities</li>
          </ul>
          
          <h5><strong>Legal Requirements</strong></h5>
          <ul style="line-height: 1.8; margin-bottom: 1.2rem;">
            <li><strong>Business license:</strong> Local and state requirements</li>
            <li><strong>Tax identification:</strong> EIN from IRS</li>
            <li><strong>Sales tax permit:</strong> If selling products</li>
            <li><strong>Professional permits:</strong> Some states require specific licenses</li>
            <li><strong>Insurance:</strong> Liability, property, business interruption</li>
          </ul>
          
          <h5><strong>Financial Setup</strong></h5>
          <ul style="line-height: 1.8; margin-bottom: 1.5rem;">
            <li><strong>Business bank account:</strong> Separate from personal finances</li>
            <li><strong>Accounting system:</strong> Track income, expenses, taxes</li>
            <li><strong>Payment processing:</strong> Credit cards, online payments</li>
            <li><strong>Contracts and agreements:</strong> Protect your business</li>
          </ul>
          
          <h4><strong>🏠 Workshop and Equipment Setup</strong></h4>
          
          <h5><strong>Space Requirements</strong></h5>
          <ul style="line-height: 1.8; margin-bottom: 1.2rem;">
            <li><strong>Home studio:</strong> Dedicated space, zoning considerations</li>
            <li><strong>Rental space:</strong> Commercial lease, foot traffic potential</li>
            <li><strong>Shared space:</strong> Co-working or maker spaces</li>
            <li><strong>Mobile service:</strong> Working in clients' homes</li>
          </ul>
          
          <h5><strong>Essential Equipment Investment</strong></h5>
          <ul style="line-height: 1.8; margin-bottom: 1.2rem;">
            <li><strong>Sewing machines:</strong> Straight stitch, serger, specialty machines</li>
            <li><strong>Pressing equipment:</strong> Professional iron, pressing tables</li>
            <li><strong>Cutting tools:</strong> Large cutting table, rotary cutters</li>
            <li><strong>Fitting area:</strong> Mirror, platform, privacy</li>
            <li><strong>Storage solutions:</strong> Fabric, patterns, client garments</li>
          </ul>
          
          <h5><strong>Technology and Software</strong></h5>
          <ul style="line-height: 1.8; margin-bottom: 1.5rem;">
            <li><strong>Design software:</strong> Adobe Illustrator, CLO 3D</li>
            <li><strong>Business management:</strong> CRM, scheduling, invoicing</li>
            <li><strong>Communication:</strong> Professional email, phone system</li>
            <li><strong>Marketing tools:</strong> Website, social media management</li>
          </ul>
          
          <br>
          
          <h4><strong>💰 Pricing Your Services</strong></h4>
          
          <h5><strong>Cost Calculation</strong></h5>
          <ul style="line-height: 1.8; margin-bottom: 1.2rem;">
            <li><strong>Material costs:</strong> Fabric, notions, interfacing</li>
            <li><strong>Labor time:</strong> Design, cutting, sewing, fitting</li>
            <li><strong>Overhead expenses:</strong> Rent, utilities, equipment depreciation</li>
            <li><strong>Profit margin:</strong> Sustainable business growth</li>
          </ul>
          
          <h5><strong>Pricing Strategies</strong></h5>
          <ul style="line-height: 1.8; margin-bottom: 1.2rem;">
            <li><strong>Hourly rate:</strong> Based on skill level and market</li>
            <li><strong>Project-based:</strong> Fixed price for specific items</li>
            <li><strong>Value-based:</strong> Price according to client benefit</li>
            <li><strong>Competitive analysis:</strong> Research local market rates</li>
          </ul>
          
          <h5><strong>Service Menu Examples</strong></h5>
          <ul style="line-height: 1.8; margin-bottom: 1.5rem;">
            <li><strong>Basic alterations:</strong> Hemming, taking in seams</li>
            <li><strong>Complex alterations:</strong> Resizing, style changes</li>
            <li><strong>Custom garments:</strong> Suits, dresses, special occasion</li>
            <li><strong>Consultation services:</strong> Wardrobe planning, style advice</li>
          </ul>
          
          <h4><strong>👥 Building Your Client Base</strong></h4>
          
          <h5><strong>Initial Marketing Strategies</strong></h5>
          <ul style="line-height: 1.8; margin-bottom: 1.2rem;">
            <li><strong>Word of mouth:</strong> Start with friends and family</li>
            <li><strong>Local networking:</strong> Business groups, craft fairs</li>
            <li><strong>Online presence:</strong> Website, social media profiles</li>
            <li><strong>Partnerships:</strong> Dry cleaners, boutiques, event planners</li>
          </ul>
          
          <h5><strong>Portfolio Development</strong></h5>
          <ul style="line-height: 1.8; margin-bottom: 1.5rem;">
            <li><strong>Before/after photos:</strong> Document transformation work</li>
            <li><strong>Custom pieces:</strong> Showcase original designs</li>
            <li><strong>Client testimonials:</strong> Build trust and credibility</li>
            <li><strong>Process documentation:</strong> Show your expertise</li>
          </ul>
          
          <br>
          
          <h4><strong>🤝 Client Management</strong></h4>
          
          <h5><strong>Initial Consultation Process</strong></h5>
          <ul style="line-height: 1.8; margin-bottom: 1.2rem;">
            <li><strong>Needs assessment:</strong> Understand client goals</li>
            <li><strong>Budget discussion:</strong> Set realistic expectations</li>
            <li><strong>Timeline planning:</strong> Delivery dates and fittings</li>
            <li><strong>Contract signing:</strong> Terms, conditions, deposits</li>
          </ul>
          
          <h5><strong>Communication Best Practices</strong></h5>
          <ul style="line-height: 1.8; margin-bottom: 1.5rem;">
            <li><strong>Regular updates:</strong> Keep clients informed of progress</li>
            <li><strong>Professional boundaries:</strong> Business hours, payment terms</li>
            <li><strong>Problem resolution:</strong> Address issues promptly and fairly</li>
            <li><strong>Follow-up service:</strong> Ensure client satisfaction</li>
          </ul>
          
          <h4><strong>💳 Financial Management</strong></h4>
          
          <h5><strong>Cash Flow Management</strong></h5>
          <ul style="line-height: 1.8; margin-bottom: 1.2rem;">
            <li><strong>Deposit requirements:</strong> 50% down payment typical</li>
            <li><strong>Progress payments:</strong> For large projects</li>
            <li><strong>Final payment:</strong> Upon completion and satisfaction</li>
            <li><strong>Emergency fund:</strong> 3-6 months operating expenses</li>
          </ul>
          
          <h5><strong>Tax Considerations</strong></h5>
          <ul style="line-height: 1.8; margin-bottom: 1.5rem;">
            <li><strong>Quarterly payments:</strong> Estimated tax obligations</li>
            <li><strong>Deductible expenses:</strong> Equipment, supplies, education</li>
            <li><strong>Record keeping:</strong> Detailed expense tracking</li>
            <li><strong>Professional help:</strong> Consider hiring an accountant</li>
          </ul>
          
          <br>
          
          <h4><strong>📈 Growth and Scaling</strong></h4>
          
          <h5><strong>Expansion Opportunities</strong></h5>
          <ul style="line-height: 1.8; margin-bottom: 1.2rem;">
            <li><strong>Additional services:</strong> Styling, personal shopping</li>
            <li><strong>Hiring help:</strong> Assistants, contractors</li>
            <li><strong>Multiple locations:</strong> Expand geographic reach</li>
            <li><strong>Online courses:</strong> Passive income streams</li>
          </ul>
          
          <h5><strong>Professional Development</strong></h5>
          <ul style="line-height: 1.8; margin-bottom: 1.5rem;">
            <li><strong>Continuing education:</strong> New techniques, trends</li>
            <li><strong>Industry networking:</strong> Professional associations</li>
            <li><strong>Skill diversification:</strong> Pattern making, design</li>
            <li><strong>Technology adoption:</strong> Stay current with tools</li>
          </ul>
          
          <h1><strong>📊 Success Metrics</strong></h1>
          <ul style="line-height: 1.8; margin-bottom: 1.5rem;">
            <li><strong>Financial goals:</strong> Revenue, profit margins</li>
            <li><strong>Client satisfaction:</strong> Repeat business, referrals</li>
            <li><strong>Efficiency metrics:</strong> Time per project, productivity</li>
            <li><strong>Personal goals:</strong> Work-life balance, fulfillment</li>
          </ul>
        `,
        videoUrl: "https://www.youtube.com/embed/U-uuxeleKu0"
      }
    ]
  }
];